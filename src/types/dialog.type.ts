export type DialogType = 'login' | 'logout' | 'service_remove';

export interface DialogData {
  open: boolean;
  type: DialogType;
}
