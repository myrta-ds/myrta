import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { InputFileModel, UploadedFileModel, UploadedResultModel } from '../../../models/input-file/input-file.model';
import { formatBytes } from '../../../helpers/extension/input-file.extension';
import { FileUploadService } from '../../../services/file-upload/file-upload.service';
import { ErrorMessagesEnum } from './enums/error-messages.enum';

@Component({
  selector: 'mrx-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.less'],
})
export class InputFileComponent {

  formatBytes = formatBytes;
  extensions?: string;
  allowedExtensions: string[] = [];
  files: InputFileModel[] = [];

  @Input() public autoUpload = true;
  @Input() public required = false;
  @Input() public disabled = false;
  @Input() public lightDisabled = false;
  @Input() public bottomFiles = false;
  @Input() public maxSize = 31457280;
  @Input() public maxFiles = 5;
  @Input() public minFiles = 0;
  @Input() public formData: any = {}; // Параметры, которые будут передаваться в форме
  @Input() public uploadEndPoint!: string;
  @Input() public deleteEndPoint?: string;
  @Input() public downloadEndPoint?: string;
  @Input() public fileNamePlaceholder?: string;
  @Input() public showInputWithError = true;
  @Input() public showDeleteButton = true;
  @Input() public isTooltipValue = false;
  @Input() public isDownloadingFile = true;
  @Input() public deleteConfirm?: (file: UploadedFileModel, result: (ok: boolean) => void) => void;

  @Input() public innerTemplate!: TemplateRef<any>;

  // ERROR
  @Input() public invalid = false;
  @Input() public invalidMessage: string | string[] = '';
  @Input() public checkInvalid: true | false | null = null;

  // ERROR MESSAGES
  @Input() public messageTooManyFiles: string = ErrorMessagesEnum.TooManyFiles;
  @Input() public messageFileTooBig: string = ErrorMessagesEnum.FileTooBig;
  @Input() public messageEmptyFile: string = ErrorMessagesEnum.EmptyFile;
  @Input() public messageInvalidFileFormat: string = ErrorMessagesEnum.InvalidFileFormat;

  // PLACEHOLDERS
  @Input() public placeholder = 'Перенесите файл с устройства или нажмите на данное поле для добавления файла';
  @Input() public placeholderFileMaxSize = 'Размер файла: не больше';
  @Input() public placeholderFileFormat = 'Формат файла:';

  @Input('files')
  set initFiles(data: UploadedFileModel[] | UploadedFileModel) {
    if (data) {
      if (Array.isArray(data)) {
        this.files = data.map(s => ({ ...s }));
      } else {
        this.files = [{ ...data }];
      }
    } else {
      this.files = [];
    }
  }

  @Input('allowedExtensions')
  public set initAllowedExtensions(val: string[]) {
    if (val) {
      this.allowedExtensions = val;
      this.extensions = val.join(', ');
    } else {
      this.allowedExtensions = [];
      this.extensions = undefined;
    }
  }

  @Output() public filesChanged: EventEmitter<InputFileModel[]> = new EventEmitter();

  constructor(private fileUploadService: FileUploadService) {
  }

  get canAdd() {
    if (this.showInputWithError) {
      return this.maxFiles > this.files.filter(s => !s.error).length;
    } else {
      return this.maxFiles > this.files.length;
    }
  }

  public get isInvalidMessage(): boolean {
    return !!this.invalidMessage || !!this.invalidMessage.length;
  }

  public get checkValidClasses(): string {
    return this.checkInvalid === false ?
      'mrx-input-checked-success' :
      this.checkInvalid === true ? 'mrx-input-checked-error' : '';
  }

  public get getClasses(): string {
    return `${this.checkValidClasses}`;
  }

  public get isValid(): boolean {
    return this.baseValidate();
  }

  public getTooltipValue(value: string): string {
    return this.isTooltipValue ? value : ''
  }

  protected baseValidate(): boolean {
    return true;
  }

  trackByFn(index: number, item: InputFileModel) {
    return Boolean(item.uuid) ? item.uuid : item.tempUuid;
  }

  delete(file: UploadedFileModel): void {
    if (this.deleteConfirm) {
      this.deleteConfirm(file, (ok) => {
        if (ok) {
          const findFile = this.files.find(s => s.uuid === file.uuid);
          if (findFile) {
            if (this.deleteEndPoint) {
              const formData = this.createFormData();
              formData.append('Qquuid', file.uuid);
              findFile.deleting = true;

              if (this.autoUpload) {
                this.fileUploadService.delete(this.deleteEndPoint, formData).subscribe(result => {
                  this.files.splice(this.files.indexOf(findFile), 1);
                  this.filesChanged.emit(this.files);
                });
              } else {
                this.clear(file);
              }

            } else {
              this.files.splice(this.files.indexOf(findFile), 1);
              this.filesChanged.emit(this.files);
            }
          }
        }
      });
    }
  }

  canCancelUploading(file: InputFileModel): boolean {
    return !!file.uploading && file.percentage ? file.percentage < 90 : false;
  }

  clear(file: InputFileModel): void {
    if (file.uploading) {
      if (file.execution) {
        file.execution.unsubscribe();
      }
    }

    const findFileIdx = this.files.indexOf(file);
    if (findFileIdx >= 0) {
      this.files.splice(findFileIdx, 1);
    }
  }

  downloadUrl(file: UploadedFileModel): string {
    if (file.url && !file.size) {
      return file.url;
    } else {
      if (this.downloadEndPoint) {
        return `${this.downloadEndPoint}?uuid=${file.uuid}`;
      }
      return '#';
    }
  }

  public dropped(files: NgxFileDropEntry[]) {
    for (const droppedFile of files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          this.uploadFile(file);
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
      }
    }
  }

  private formDataKeys(): string[] {
    return Object.keys(this.formData);
  }

  private createFormData(): FormData {
    const form = new FormData();
    if (this.maxFiles) {
      form.append('MaxFiles', this.maxFiles.toString(10));
    }
    const keys = this.formDataKeys();
    keys.forEach(key => form.append(key, this.formData[key]));
    return form;
  }

  private uploadFile(file: File): void {
    const data = {
      uuid: '',
      tempUuid: uuidv4(),
      name: file.name,
      size: file.size,
      uploading: true,
      percentage: 0,
      file: file
    } as InputFileModel;

    if (!this.checkForUpload(data)) {
      return;
    }

    const formData = this.createFormData();
    formData.append('File', file);

    if (this.autoUpload) {
      data.execution = this.fileUploadService.upload(this.uploadEndPoint, formData).pipe(
        catchError((err) => {
          data.uploading = false;
          return EMPTY;
        })
      )
        .subscribe((event: HttpEvent<UploadedResultModel>) => {
          switch (event.type) {
            case HttpEventType.Sent:
              break;
            case HttpEventType.ResponseHeader:
              break;
            case HttpEventType.UploadProgress:
              if (event.total) {
                data.percentage = Math.round(event.loaded / event.total * 100);
              }
              break;
            case HttpEventType.Response:
              if (event.body) {
                data.uploading = false;
                data.percentage = 0;
                data.uuid = event.body.uuid;
                data.file = undefined;
                data.error = event.body.message;
                if (data.execution) {
                  data.execution.unsubscribe();
                }

                if (this.files.every(s => !s.uploading)) {
                  const completedFiles = this.files.filter(s => !s.error);
                  this.filesChanged.emit(completedFiles);
                }
              }
          }
        });
    } else {
      data.uploading = false;
      data.uuid = data.tempUuid || '';
      if (this.files.every(s => !s.uploading)) {
        this.filesChanged.emit(this.files);
      }
    }
  }

  private checkForUpload(data: InputFileModel): boolean {
    if (!this.canAdd) {
      data.error = this.messageTooManyFiles;
      data.uploading = false;
      this.files.push(data);
      return false;
    }

    this.files.push(data);
    if (data.file && data.file.size > this.maxSize) {
      data.error = this.messageFileTooBig;
      data.uploading = false;
      return false;
    }
    if (data.file && data.file.size == 0) {
      data.error = this.messageEmptyFile;
      data.uploading = false;
      return false;
    }
    if (this.allowedExtensions.length > 0 && !this.allowedExtensions.some(
      s => data.file && data.file.name.toLowerCase().endsWith(s.toLowerCase()))) {

      data.error = this.messageInvalidFileFormat;
      data.uploading = false;
      return false;
    }
    return true;
  }
}
