import { Injectable } from '@angular/core';

export type StateType = 'saving' | 'saved' | 'error' | 'stopped'

export interface Field {
  id: string,
  state: StateType,
  timerId?: number
}

@Injectable()
export class MrxAutosaveService {

  private _fields: Field[] = []
  public stoppedTimer!: number

  public addId(id: string) {
    const isFind =  this._fields.some((field: Field) => field.id === id)

    clearTimeout(this.stoppedTimer)

    if (!isFind) {
      this._fields.push({id: id, state: 'stopped'})
    }
  }

  public start() {
    this._fields = this._fields.filter((field: Field) => field.state !== 'saved').map((field: Field) => ({...field, state: 'saving'}))
  }

  public success() {
    this._fields = this._fields.map((field: Field) => ({...field, state: 'saved'}))

    this.stoppedTimer = setTimeout(() => {
      this.stop()
    }, 2000)
  }

  public stop() {
    this._fields = this._fields.map((field: Field) => ({...field, state: 'stopped'}))

    setTimeout(() => {
      this._fields.length = 0
    })
  }

  public error() {
    this._fields = this._fields.map((field: Field) => ({...field, state: 'error'}))

    this.stoppedTimer = setTimeout(() => {
      this.stop()
    }, 2000)
  }

  public get fields() {
    return this._fields
  }
}
