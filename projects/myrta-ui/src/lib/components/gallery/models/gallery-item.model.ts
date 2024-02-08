export interface GalleryItemModel {
  uuid: string,
  imageName: string,
  url: string,
  previewUrl: string,
  description: string,
  previewImageId: string,
  [name: string]: string;
}

export interface GalleryInnerItemModal {
  src: string,
  thumb: string,
  caption?: string,
  type?: 'html' | 'ajax' | 'image' | 'inline' | 'clone' | 'iframe' | 'map' | 'pdf' | 'html5video' | 'youtube' | 'vimeo' | undefined,
  uuid: string,
  imageName: string,
  imageEl?: HTMLImageElement,
  previewImageId: string,
  el?: any
}

export interface GalleryRotateSlides {
  previewImageId: string,
  rotate: number
}
