import { GalleryInnerItemModal } from '../models/gallery-item.model';

// @ts-ignore
export const rotateBase64Image = (base64Image: string, isClockwise: boolean, slide?: GalleryInnerItemModal): string => {
  const offScreenCanvas = document.createElement('canvas');
  const offScreenCanvasCtx = offScreenCanvas.getContext('2d');

  if (!offScreenCanvasCtx) return ''

  const img = new Image();
  img.src = base64Image;
  img.onload = () => {
    if (slide && slide.imageEl) {
      offScreenCanvas.height = slide.imageEl.width;
      offScreenCanvas.width = slide.imageEl.height;
    } else {
      offScreenCanvas.height = img.width;
      offScreenCanvas.width = img.height;
    }

    // rotate and draw source image into the off-screen canvas:
    if (isClockwise) {
      offScreenCanvasCtx.rotate(90 * Math.PI / 180);
      offScreenCanvasCtx.translate(0, -offScreenCanvas.width);
    } else {
      offScreenCanvasCtx.rotate(-90 * Math.PI / 180);
      offScreenCanvasCtx.translate(-offScreenCanvas.height, 0);
    }
    offScreenCanvasCtx.drawImage(img, 0, 0);

    return offScreenCanvas.toDataURL();
  }
}
