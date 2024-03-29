export type StateType = 'saving' | 'saved' | 'error' | 'stopped'

export interface Field {
  id: string;
  state: StateType;
  timerId?: number;
  groupId?: string | null;
}

export interface MrxAutoSaveState {
  fields: Field[],
}

export const initialMrxAutoSaveState: MrxAutoSaveState = {
  fields: [],
};
