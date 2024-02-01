import { TypedInputState } from '../enums/typed.input.state';

export interface TypedInputModel {
  order: number;
  isHideOrder: boolean;
  label: string;
  maxSymbols: number;
  widthStyle: string;
  tooltip: string;
  isHide: boolean;
  isRequired: boolean;
  isEditable: boolean;
  state: TypedInputState;
  placeholder: string;
  directions: string[];
  inputName: string;
}
