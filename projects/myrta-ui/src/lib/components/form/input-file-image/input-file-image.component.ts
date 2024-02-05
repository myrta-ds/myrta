import { Component, EventEmitter, HostBinding, Input, OnInit, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { InputFileModel, UploadedFileModel, UploadedResultModel } from '../../../models/input-file/input-file.model';
import { FileUploadService } from '../../../services/file-upload/file-upload.service';
import { SimpleModalService } from 'ngx-simple-modal';
import { FileSystemFileEntry, NgxFileDropEntry } from 'ngx-file-drop';
import { convertBase64ToFile, formatBytes, getBase64FromUrl } from '../../../helpers/extension/input-file.extension';
import { v4 as uuidv4 } from 'uuid';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { FileImageEditModalComponent } from './components/file-image-edit-modal/file-image-edit-modal.component';
import { InputFileImageTypeEnum, InputFileImageTypeTypes } from './input-file-image.enum';
import { PreviewEnum } from './input-file-image.enum';

@Component({
  selector: 'mrx-input-file-image',
  templateUrl: './input-file-image.component.html',
  styleUrls: ['./input-file-image.component.less'],
  encapsulation: ViewEncapsulation.None,
})

export class InputFileImageComponent {

  formatBytes = formatBytes;
  extensions?: string;
  allowedExtensions: string[] = [];
  files: InputFileModel[] = [];
  notFoundImage = PreviewEnum.notFoundImage

  @HostBinding('class')
  public hostClass = 'ng-form-file-input';

  /**
   * @param type avatar default
   */
  @Input() public type: InputFileImageTypeTypes = 'default'

  @Input() public preview = ''
  @Input() public customClasses = '';
  @Input() public required = false;
  @Input() public disabled = false;
  @Input() public maxSize = 31457280;
  @Input() public maxFiles = 5;
  @Input() public minFiles = 0;
  @Input() public formData: any = {};   // Параметры, которые будут передаваться в форме
  @Input() public placeholder?: string;
  @Input() public uploadEndPoint!: string;
  @Input() public deleteEndPoint?: string;
  @Input() public downloadEndPoint?: string;
  @Input() public fileNamePlaceholder?: string;
  @Input() public deleteConfirm?: (file: UploadedFileModel, result: (ok: boolean) => void) => void;
  @Input() public innerTemplate!: TemplateRef<any>;

  @Input('files')
  set initFiles(data: UploadedFileModel[] | UploadedFileModel) {
    if (data) {
      if (Array.isArray(data)) {
        this.files = data.map(s => ({...s}));
      } else {
        this.files = [{...data}];
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

  // @Output() public uploadComplete: EventEmitter<InputFileModel[]> = new EventEmitter();
  @Output() public filesChanged: EventEmitter<InputFileModel[]> = new EventEmitter();

  constructor(
    private imageUploadService: FileUploadService,
    private simpleModalService:SimpleModalService
  ) {}

  public get getDefaultPlaceholder(): string {
    return this.type === 'avatar' ? 'Загрузите фотографию' : 'Перенесите файл с устройства или нажмите на данное поле для добавления файла'
  }

  public get getClasses(): string {
    return `${InputFileImageTypeEnum[this.type]} ${this.customClasses}`;
  }

  public get getDropZoneClasses(): string {
    return `ng-custom-file-input ${this.disabled ? 'mrx-input-file-image__disabled' : ''}`
  }

  public get canAdd() {
    if (this.type === 'avatar') {
      return this.files.length < 1
    } else {
      return this.maxFiles > this.files.filter(s => !s.error).length;
    }
  }

  trackByFn(index: number, item: InputFileModel) {
    return Boolean(item.uuid) ? item.uuid : item.tempUuid;
  }

  delete(event: any, file: UploadedFileModel): void {
    event.stopPropagation()

    if (this.deleteConfirm) {
      this.deleteConfirm(file, (ok) => {
        if (ok) {
          const findFile = this.files.find(s => s.uuid === file.uuid);
          if (findFile) {
            if (this.deleteEndPoint) {
              const formData = this.createFormData();
              formData.append('Qquuid', file.uuid);
              findFile.deleting = true;

              this.imageUploadService.delete(this.deleteEndPoint, formData).subscribe(result => {
                this.files.splice(this.files.indexOf(findFile), 1);
                this.filesChanged.emit(this.files);
              });

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
    return !!file.uploading && file.percentage ? file.percentage < 90 : !!file.uploading;
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
    if (file.url) {
      return file.url;
    } else {
      if (this.downloadEndPoint) {
        return `${this.downloadEndPoint}?uuid=${file.uuid}`;
      }
      return this.notFoundImage;
    }
  }

  public dropped(files: NgxFileDropEntry[]) {
    const droppedFile = files[0]

    if (droppedFile.fileEntry.isFile) {
      const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;

      fileEntry.file((file: File) => {
        this.simpleModalService.addModal(FileImageEditModalComponent, {
          title: 'Обложка',
          fileImage: file
        }, {wrapperDefaultClasses: 'mrx-modal fade-anim'})
          .subscribe((res) => {
            if (res.result) {
              this.uploadFile(res.fileImage, res.fileUrl);
            }
          })
      });
    } else {
      // It was a directory (empty directories are added, otherwise only files)
      const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
    }
  }

  public changePreview(event: any, file: UploadedFileModel) {
    event.stopPropagation()

    const url = this.downloadUrl(file)

    getBase64FromUrl(url).then((base64Url: any) => {
      this.simpleModalService.addModal(FileImageEditModalComponent, {
        title: 'Обложка',
        fileImage: convertBase64ToFile(base64Url, file.name || '', 'image/png')
      }, {wrapperDefaultClasses: 'mrx-modal fade-anim'})
        .subscribe((res) => {
          if (res.result) {
            const findFile = this.files.find(s => {
              if (s.uuid !== '') {
                return s.uuid === file.uuid
              } else {
                return s.tempUuid === file.tempUuid
              }
            });

            if (findFile) {
              if (this.deleteEndPoint) {
                const formData = this.createFormData();
                formData.append('Qquuid', file.uuid);
                findFile.deleting = true;

                this.imageUploadService.delete(this.deleteEndPoint, formData).subscribe(result => {
                  this.files.splice(this.files.indexOf(findFile), 1);
                  this.filesChanged.emit(this.files);
                  this.uploadFile(res.fileImage, res.fileUrl)
                });

              } else {
                this.uploadFile(res.fileImage, res.fileUrl, this.files.indexOf(findFile), 'update')
              }
            }
          }
        })
    })
  }

  public fileOver(event: any) {
  }

  public fileLeave(event: any) {
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

  private uploadFile(file: File, urlImage?: string, idxFile: number = 0, eventType: 'create' | 'update' = 'create') {
    const data = {
      uuid: '',
      tempUuid: uuidv4(),
      name: file.name,
      size: file.size,
      uploading: true,
      percentage: 0,
      file: file,
      url: urlImage
    } as InputFileModel;

    if (!this.checkForUpload(data, idxFile, eventType)) {
      return;
    }

    const formData = this.createFormData();
    formData.append('File', file);

    data.execution = this.imageUploadService.upload(this.uploadEndPoint, formData).pipe(
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
            if(event.body) {
              data.uploading = false;
              data.percentage = 0;
              data.uuid = event.body.uuid;
              data.file = undefined;
              data.error = event.body.message;

              if (data.execution) {
                data.execution.unsubscribe();
              }
              if (this.files.every(s => !s.uploading)) {

                this.filesChanged.emit(this.files);
              }
            }
        }
      });
  }

  private checkForUpload(data: InputFileModel, idxFile: number = 0, eventType?: 'create' | 'update'): boolean {
    if (eventType === 'update') {
      this.files.splice(idxFile, 1, data)
      this.filesChanged.emit(this.files);
      return true
    }

    if (this.type === 'avatar') {
      this.files.length = 0
      this.files.push(data);
      return true
    }

    if (!this.canAdd) {
      data.error = 'Слишком много файлов';
      data.uploading = false;
      this.files.push(data);
      return false;
    }

    this.files.push(data);

    if (data.file && data.file.size > this.maxSize) {
      data.error = 'Слишком большой файл';
      data.uploading = false;
      return false;
    }
    if (data.file && data.file.size == 0) {
      data.error = 'Пустой файл';
      data.uploading = false;
      return false;
    }
    if (this.allowedExtensions.length > 0 && !this.allowedExtensions.some(
      s => data.file?.name.toLowerCase().endsWith(s.toLowerCase()))) {

      data.error = 'Неверный формат файла';
      data.uploading = false;
      return false;
    }
    return true;
  }
}
