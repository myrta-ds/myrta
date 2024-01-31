import { ConnectedPosition } from '@angular/cdk/overlay';

const topPosition: ConnectedPosition = {
  originX: 'center',
  originY: 'top',
  overlayX: 'center',
  overlayY: 'bottom',
  panelClass: 'top',
}

const bottomPosition: ConnectedPosition = {
  originX: 'center',
  originY: 'bottom',
  overlayX: 'center',
  overlayY: 'top',
  panelClass: 'bottom',
}

const leftPosition: ConnectedPosition = {
  originX: 'start',
  originY: 'center',
  overlayX: 'end',
  overlayY: 'center',
  panelClass: 'start',
}

const rightPosition: ConnectedPosition = {
  originX: 'end',
  originY: 'center',
  overlayX: 'start',
  overlayY: 'center',
  panelClass: 'end',
}

const topStartPosition: ConnectedPosition = {
  originX: 'start',
  originY: 'top',
  overlayX: 'start',
  overlayY: 'bottom',
  panelClass: 'top-start',
}

const topEndPosition: ConnectedPosition = {
  originX: 'end',
  originY: 'top',
  overlayX: 'end',
  overlayY: 'bottom',
  panelClass: 'top-end',
}

const bottomStartPosition: ConnectedPosition = {
  originX: 'start',
  originY: 'bottom',
  overlayX: 'start',
  overlayY: 'top',
  panelClass: 'bottom-start',
}

const bottomEndPosition: ConnectedPosition = {
  originX: 'end',
  originY: 'bottom',
  overlayX: 'end',
  overlayY: 'top',
  panelClass: 'bottom-end',
}

export const positions: ConnectedPosition[] = [
  topPosition, bottomPosition, leftPosition, rightPosition
]

export interface ConnectedPositionVariants {
  [name: string]: ConnectedPosition[];
}

export const positionStrategy: ConnectedPositionVariants = {
  top: [topPosition, bottomPosition, leftPosition, rightPosition],
  bottom: [bottomPosition, topPosition, leftPosition, rightPosition],
  left: [leftPosition, rightPosition, topPosition, bottomPosition],
  right: [rightPosition, leftPosition, topPosition, bottomPosition],
  'top-start': [topStartPosition, topPosition, bottomStartPosition, bottomPosition],
  'top-end': [topEndPosition, topPosition, bottomEndPosition, bottomPosition],
  'bottom-start': [bottomStartPosition, bottomPosition, topStartPosition, topPosition],
  'bottom-end': [bottomEndPosition, bottomPosition, topEndPosition, topPosition],
}

export type ConnectedPositionVariantsType =
  'top' |
  'bottom' |
  'left' |
  'right' |
  'top-start' |
  'top-end' |
  'bottom-start' |
  'bottom-end'
