import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { Fancybox, ThumbsOptionsType, ToolbarOptionsType } from 'mrx-gallery-lib';
import { GalleryInnerItemModal, GalleryItemModel, GalleryRotateSlides } from './models/gallery-item.model';
import { customToolbarDefault } from './constants/custom-buttons-default';
import { OptionsType } from 'mrx-gallery-lib/types/Fancybox/options';
import { thumbsConfigDefault } from './constants/thumbs-config-default';
import { GalleryService } from './services/gallery.service';

@Component({
  selector: 'mrx-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.less'],
})
export class GalleryComponent implements OnInit {
  private timeStamp: number = (new Date()).getTime();
  public rotateSlides: GalleryRotateSlides[] = [];
  public isLoading = false

  private isExpanded = false;

  @Input() data: GalleryItemModel[] = []
  @Input() isExpandable = true;
  @Input() customClasses = '';
  @Input() rotateEndPoint!: string;
  @Input() deleteEndPoint!: string;
  @Input() updateEndPoint!: string;
  @Input() isEditing = false;
  @Input() isSaveRotate = true;
  @Input() descriptionMaxLength = 0;
  @Input() thumbsConfig!: Boolean | Partial<ThumbsOptionsType>;
  @Input() toolbarConfig!: Boolean | Partial<ToolbarOptionsType>;

  @Output() deletePhoto: EventEmitter<any> = new EventEmitter<any>();
  @Output() updatePhoto: EventEmitter<any> = new EventEmitter<any>();

  private defaultConfig: Partial<OptionsType> = {};

  constructor(
    private galleryService: GalleryService,
  ) {
  }

  ngOnInit(): void {
    if (this.isExpandable) {
      this.isExpanded = false;
    }

    if (this.thumbsConfig) {
      this.defaultConfig.Thumbs = this.thumbsConfig;
    }

    if (this.toolbarConfig) {
      this.defaultConfig.Toolbar = this.toolbarConfig;
    }
  }

  public get getClasses(): string {
    return `${this.customClasses}`;
  }

  public get isShowMore(): boolean {
    return this.data.length > 8
  }

  public get getData(): GalleryItemModel[] {
    if (this.isExpandable && !this.isExpanded) {
      return this.data.slice(0, 8);
    } else {
      return this.data;
    }
  }

  private get getSlides(): GalleryInnerItemModal[] {
    return this.data.map((slide) => {
      return {
        src: slide.url + '?' + this.timeStamp,
        thumb: slide.previewUrl,
        caption: slide.description,
        uuid: slide.uuid,
        imageName: slide.imageName,
        previewImageId: slide.previewImageId
      };
    });
  }

  public get getIsExpanded(): boolean {
    return this.isExpanded;
  }

  public changeExpanded(): void {
    this.isExpanded = !this.isExpanded;
  }

  public trackByFn(index: number, item: any) {
    return item.id;
  }

  public openGalleryModal(id: number): void {
    new Fancybox(
      this.getSlides,
      {
        startIndex: id,
        compact: false,
        hideScrollbar: false,
        Carousel: {},
        Thumbs: thumbsConfigDefault,
        on: {
          close: (fancy: any, event: any) => {
            if (this.rotateSlides.length) {
              this.galleryService.rotate(this.rotateSlides, this.rotateEndPoint).subscribe(res => {
                this.isLoading = true

                setTimeout(() => {
                  this.isLoading = false
                  this.rotateSlides.length = 0
                  this.timeStamp = (new Date()).getTime();
                }, 1000)
              })
            }
          }
        },
        Toolbar: {
          items: {
            rotateLeft: {
              tpl: `
            <button title="Rotate counterclockwise" class="f-button">
              <svg tabindex="-1" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01">
                </path>
              </svg>
            </button>
          `,
              click: (a: any) => {
                const slide = a.instance.getSlide();
                if (!slide) return;

                const foundRotateSlide = this.rotateSlides.find((s) => s.previewImageId === slide.previewImageId);

                if (foundRotateSlide) {
                  this.rotateSlides = this.rotateSlides.map((s) => {
                    if (s.previewImageId === foundRotateSlide.previewImageId) {
                      s.rotate = s.rotate === -270 ? 0 : s.rotate - 90;
                    }
                    return s;
                  }).filter((s) => s.rotate !== 0);
                } else {
                  this.rotateSlides.push({
                    previewImageId: slide.previewImageId,
                    rotate: -90
                  });
                }

                slide.panzoom?.rotateCCW()
              }
            },
            rotateRight: {
              tpl: `
            <button title="Rotate clockwise" class="f-button">
              <svg tabindex="-1" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01">
                </path>
              </svg>
            </button>
          `,
              click: (a: any) => {
                const slide = a.instance.getSlide();
                if (!slide) return;

                const foundRotateSlide = this.rotateSlides.find((s) => s.previewImageId === slide.previewImageId);

                if (foundRotateSlide) {
                  this.rotateSlides = this.rotateSlides.map((s) => {
                    if (s.previewImageId === foundRotateSlide.previewImageId) {
                      s.rotate = s.rotate === 270 ? 0 : s.rotate + 90;
                    }
                    return s;
                  }).filter((s) => s.rotate !== 0);
                } else {
                  this.rotateSlides.push({
                    previewImageId: slide.previewImageId,
                    rotate: 90
                  });
                }

                slide.panzoom?.rotateCW()
              }
            }
          },
          display: customToolbarDefault,
        },
        ...this.defaultConfig
      },
      {}
    );
  }
}
