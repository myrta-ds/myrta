import { cloneDeep } from 'lodash-es';

export type OptionMethodType = 'submit' | 'input'
export type OptionClearType = 'all' | 'selected'
export type ValidationsTypes = 'required' | 'maxLength' | 'minLength' | 'email' | 'pattern' | 'messages' | 'maxValue' | 'minValue'
export type ValidationsType = {
  required?: boolean,
  type?: 'multi' | 'single',
  maxLength?: number,
  minLength?: number,
  maxValue?: number,
  minValue?: number,
  email?: boolean,
  pattern?: RegExp,
  messages?: IMessages
}

export interface FormValidatorOptions {
  method?: OptionMethodType
  clear?: OptionClearType,
  messages?: any
}

export interface IMessages {
  [name: string]: string;
}

export interface IValidations {
  [name: string]: ValidationsType;
}

export interface IFields {
  [name: string]: any;
}

export const emailRegExp = /^[a-zA-Z0-9._а-яА-Я-]+@[a-zA-Zа-яА-Я0-9.-]+\.[a-zA-Zа-яА-Я]{2,10}$/

export class MrxFormValidator {
  private _fields: any = []
  private _validations: IValidations = {}
  private _errors: any = {}
  private _isValid = true
  private _isInit = false
  private _modelClone: IFields = {}

  private _method = 'submit'
  private _invalidMessages = {
    required: () => 'Поле обязательно для заполнения',
    maxLength: (length: number) => `Максимальное кол-во символов ${length}`,
    minLength: (length: number) => `Минимальное кол-во символов ${length}`,
    maxValue: (value: number) => `Максимальное значение ${value}`,
    minValue: (value: number) => `Минимальное значение ${value}`,
    email: () => 'Указан некорректный адрес электронной почты',
    pattern: () => 'Указано некорректное значение',
  }

  constructor(options?: FormValidatorOptions) {
    if (options?.method) {
      this._method = options.method
    }

    if (options?.messages) {
      this._invalidMessages = {...this._invalidMessages, ...options.messages}
    }
  }

  private sortValidators(validations: any) {
    const sortedValidatorsConstant = ['maxValue', 'minValue', 'minLength', 'maxLength', 'email', 'pattern', 'messages', 'required', 'type']
    const sortedValidators: any = {}

    for (let key of sortedValidatorsConstant) {
      if (validations.hasOwnProperty(key)) {
        sortedValidators[key] = validations[key]
      } else {
        if (key === 'type') {
          validations.type = 'multi'
        }
      }
    }

    return sortedValidators
  }

  public get errors() {
    return this._errors
  }

  private set fields(fields: any) {
    this._fields = Object.assign({}, fields)
  }

  private getNamesUpdatedProperties(oldModel: any, newModel: any): string[] {
    const namesUpdatedProperties = []

    for (let key in newModel) {
      switch (true) {
        case Array.isArray(newModel[key]):
          if (JSON.stringify(newModel[key]) !== JSON.stringify(oldModel[key])) {
            namesUpdatedProperties.push(key)
          }
          break
        default:
          if (newModel[key] !== oldModel[key]) {
            namesUpdatedProperties.push(key)
          }
          break
      }
    }

    return namesUpdatedProperties
  }

  private validateField(fieldValue: string, fieldName: string, validations: ValidationsType): void {
    for (let key in validations) {
      switch (key) {
        case 'required':
          if (!validations[key]) {
            continue
          }

          if (Array.isArray(fieldValue) && validations.type !== 'single') {
            fieldValue.forEach((field, idx) => {
              if ((field === '' || field === null || field === undefined) && key === 'required') {

                if (validations.messages?.[key]) {
                  this._errors[fieldName][idx] = validations.messages[key]
                } else {
                  this._errors[fieldName] = {...this._errors[fieldName], [idx]: this._invalidMessages[key]()}
                }

                this._isValid = false
              }
            })
          } else if (Array.isArray(fieldValue) && validations.type === 'single' && fieldValue.length === 0) {
            if (validations.messages?.[key]) {
              this._errors[fieldName] = validations.messages[key]
            } else {
              this._errors[fieldName] = this._invalidMessages[key]()
            }
          } else if (String(fieldValue) === '' || String(fieldValue) === 'false' || fieldValue === null || fieldValue === undefined || String(fieldValue) === '<p><br></p>') {
            if (validations.messages?.[key]) {
              this._errors[fieldName] = validations.messages[key]
            } else {
              this._errors[fieldName] = this._invalidMessages[key]()
            }

            this._isValid = false
          }
          break
        case 'email':
          if (!validations[key]) {
            continue
          }

          if (!emailRegExp.test(fieldValue)) {
            if (validations.messages?.[key]) {
              this._errors[fieldName] = validations.messages[key]
            } else {
              this._errors[fieldName] = this._invalidMessages[key]()
            }

            this._isValid = false
          }
          break
        case 'pattern':
          if (!validations[key]?.test(fieldValue)) {
            if (validations.messages?.[key]) {
              this._errors[fieldName] = validations.messages[key]
            } else {
              this._errors[fieldName] = this._invalidMessages[key]()
            }

            this._isValid = false
          }
          break
        case 'minLength':
          if (String(fieldValue).length < Number(validations[key]) && !!validations['required']) {
            if (validations.messages?.[key]) {
              this._errors[fieldName] = validations.messages[key]
            } else {
              this._errors[fieldName] = this._invalidMessages[key](Number(validations[key]))
            }

            this._isValid = false
          }
          break
        case 'maxLength':
          if (String(fieldValue).length > Number(validations[key])) {
            if (validations.messages?.[key]) {
              this._errors[fieldName] = validations.messages[key]
            } else {
              this._errors[fieldName] = this._invalidMessages[key](Number(validations[key]))
            }

            this._isValid = false
          }
          break
        case 'maxValue':
          if (parseInt(fieldValue) > Number(validations[key])) {
            if (validations.messages?.[key]) {
              this._errors[fieldName] = validations.messages[key]
            } else {
              this._errors[fieldName] = this._invalidMessages[key](Number(validations[key]))
            }

            this._isValid = false
          }
          break
        case 'minValue':
          if (parseInt(fieldValue) < Number(validations[key])) {
            if (validations.messages?.[key]) {
              this._errors[fieldName] = validations.messages[key]
            } else {
              this._errors[fieldName] = this._invalidMessages[key](Number(validations[key]))
            }

            this._isValid = false
          }
          break
      }
    }
  }

  private hiddenValidateField(fieldValue: string, fieldName: string, validations: ValidationsType): void {
    for (let key in validations) {
      switch (key) {
        case 'required':
          if (!validations[key]) {
            continue
          }
          if (Array.isArray(fieldValue)) {
            fieldValue.forEach((field, idx) => {
              if ((field === '' || field === null || field === undefined) && key === 'required') {
                this._isValid = false
              }
            })
          } else if (Array.isArray(fieldValue) && validations.type === 'single' && fieldValue.length === 0) {
            this._isValid = false
          } else if (String(fieldValue) === '' || String(fieldValue) === 'false' || fieldValue === null || fieldValue === undefined || String(fieldValue) === '<p><br></p>') {
            this._isValid = false
          }
          break
        case 'email':
          if (!validations[key]) {
            continue
          }

          if (!emailRegExp.test(fieldValue)) {
            this._isValid = false
          }
          break
        case 'pattern':
          if (!validations[key]?.test(fieldValue)) {
            this._isValid = false
          }
          break
        case 'minLength':
          if (String(fieldValue).length < Number(validations[key]) && !!validations['required']) {
            this._isValid = false
          }
          break
        case 'maxLength':
          if (String(fieldValue).length > Number(validations[key])) {
            this._isValid = false
          }
          break
        case 'maxValue':
          if (parseInt(fieldValue) > Number(validations[key]) && !!validations['required']) {
            this._isValid = false
          }
          break
        case 'minValue':
          if (parseInt(fieldValue) < Number(validations[key])) {
            this._isValid = false
          }
          break
      }
    }
  }

  public initFields(fields: IFields, validations: IValidations): void {
    this.fields = cloneDeep(fields)
    this._validations = validations
    this._modelClone = cloneDeep(fields)

    for (let key in validations) {
      this._validations[key] = this.sortValidators(validations[key])
      this.errors[key] = null
    }

    this._isInit = true
  }

  public initModelChanged(fields: IFields): void {
    if (this._isInit) {
      this._isValid = true
      this._modelClone = cloneDeep(fields)

      this.getNamesUpdatedProperties(this._fields, fields).forEach((name: string) => {
        this._errors[name] = null

        this._method === 'input' && this.validateField(fields[name], name, this._validations[name])
      })
    }

    this.fields = cloneDeep(fields)
  }

  public initModelChangedFromField(field: any, fieldName: string): void {
    if (this._isInit) {
      this._isValid = true
      this._modelClone[fieldName] = field

      this.getNamesUpdatedProperties(this._fields, this._modelClone).forEach((name: string) => {
        this._errors[name] = null

        this._method === 'input' && this.validateField(this._modelClone[name], name, this._validations[name])
      })
    }

    this.fields = this._modelClone
  }

  public isValid(): boolean {
    this._isValid = true

    for (let key in this._validations) {
      this.errors[key] = null
      this.validateField(this._fields[key], key, this._validations[key])
    }

    return this._isValid
  }

  public isHiddenValid(): boolean {
    this._isValid = true

    for (let key in this._validations) {
      this.hiddenValidateField(this._fields[key], key, this._validations[key])
    }

    return this._isValid
  }
}
