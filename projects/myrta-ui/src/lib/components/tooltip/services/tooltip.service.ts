import { Injectable } from '@angular/core';
import { getHashCode } from '../../../helpers/string-hash-code';

@Injectable()
export class TooltipService {

  private _tooltip: string = ''
  private _tooltipVisible: boolean = false
  private _isSaveToStorage: boolean = false

  private get localStorageKey() {
    return this.getTooltip ? `tooltip_${getHashCode(this.getTooltip)}` : null
  }

  public get getTooltip(): string {
    return this._tooltip
  }

  public set setTooltip(value: string) {
    this._tooltip = value
  }

  public get getSaveToStorage(): boolean {
    return this._isSaveToStorage
  }

  public set setSaveToStorage(value: boolean) {
    this._isSaveToStorage = value
  }

  public get getTooltipVisible(): boolean {
    return this._tooltipVisible
  }

  public set setTooltipVisible(value: boolean) {
    this._tooltipVisible = value || !!localStorage.getItem(<string>this.localStorageKey)

    if (this._tooltipVisible && this._isSaveToStorage) {
      localStorage.setItem(<string>this.localStorageKey, 'visible')
    }
  }

  public toggleTooltipVisibleFromCode(value: boolean): void {
    if (value && this._isSaveToStorage) {
      localStorage.setItem(<string>this.localStorageKey, 'visible')
    } else {
      localStorage.removeItem(<string>this.localStorageKey)
    }

    this._tooltipVisible = value
  }

  public toggleTooltipVisible(): void {
    if (this._isSaveToStorage) {
      if (localStorage.getItem(<string>this.localStorageKey)) {
        localStorage.removeItem(<string>this.localStorageKey)
      } else {
        localStorage.setItem(<string>this.localStorageKey, 'visible')
      }
    }


    this._tooltipVisible = !this._tooltipVisible
  }

  public initTooltip(tooltip: string, tooltipInitialVisible: boolean): void {
    this.setTooltip = tooltip
    this.setTooltipVisible = tooltipInitialVisible

    if (this._isSaveToStorage) {
      this._tooltipVisible = !!localStorage.getItem(<string>this.localStorageKey)
    }
  }
}
