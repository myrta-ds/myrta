import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { GalleryItemModel, GalleryRotateSlides } from '../../models/gallery-item.model';
import { GalleryService } from '../../services/gallery.service';
import { SimpleModalService } from 'ngx-simple-modal';
import { GalleryConfirmModalComponent } from '../gallery-confirm-modal/gallery-confirm-modal.component';
import { MrxAutosaveService } from '../../../../services';

@Component({
  selector: 'mrx-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MrxAutosaveService]
})
export class GalleryItemComponent {
  private timeStamp: number = (new Date()).getTime();
  private isLoading = false;
  private _timer!: ReturnType<typeof setTimeout>;

  @Input() preview!: GalleryItemModel;
  @Input() index!: number;
  @Input() isEditing = false;
  @Input() descriptionMaxLength = 0;
  @Input() deleteEndPoint!: string;
  @Input() updateEndPoint!: string;
  @Input() rotateSlides: GalleryRotateSlides[] = [];

  @Input('isLoading') set setIsLoading(value: boolean) {
    this.isLoading = value;
    this.timeStamp = (new Date()).getTime();
  }

  @Output() openGalleryModal: EventEmitter<number> = new EventEmitter<number>();
  @Output() deletePhoto: EventEmitter<any> = new EventEmitter<any>();
  @Output() updatePhoto: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private galleryService: GalleryService,
    private _simpleModalService: SimpleModalService,
  ) {
  }

  getImageUrl(): string {
    return this.preview.previewUrl + '?' + this.timeStamp;
  }

  get yandexCheckUrl() {
    return `https://yandex.ru/images/search?source=collections&rpt=imageview&url=${this.preview.url}`;
  }

  get googleCheckUrl() {
    return `https://lens.google.com/uploadbyurl?url=${this.preview.url}`;
  }

  get isLoadingImage(): boolean {
    return this.isLoading && !!this.rotateSlides.find((s) => s.previewImageId === this.preview.previewImageId);
  }

  onOpenGalleryModal() {
    this.openGalleryModal.emit(this.index);
  }

  deleteImage() {
    this._simpleModalService.addModal(GalleryConfirmModalComponent, {
      title: 'УДАЛЕНИЕ ДАННЫХ',
      message: 'Вы уверены, что хотите удалить файл?'
    }, {wrapperDefaultClasses: 'mrx-modal fade-anim'})
      .subscribe((res) => {
        if (res.result) {
          this.galleryService.delete(this.deleteEndPoint, this.preview.uuid).subscribe(res => {
            this.deletePhoto.emit(res);
          });
        }
      })
  }

  changeDescription(obj: any) {
    clearTimeout(this._timer);

    this._timer = setTimeout(() => {
      this.galleryService.update(this.updateEndPoint, this.preview.uuid, obj.value).subscribe(res => {
        this.updatePhoto.emit(res);
      }, () => {

      });
    }, 1500);
  }
}
