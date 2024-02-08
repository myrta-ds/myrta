import {
  ToolbarItemKey,
  ToolbarItemsType,
  ToolbarPosition
} from 'mrx-gallery-lib/types/Fancybox/plugins/Toolbar/Toolbar';

export const customButtonsDefault: ToolbarItemsType = {

};

export const customToolbarDefault: Record<ToolbarPosition, Array<ToolbarItemKey>> = {
  left: ['infobar'],
  middle: [],
  right: ['rotateLeft', 'rotateRight', 'iterateZoom', 'slideshow', 'thumbs', 'close'],
}
