import { TemplateRef } from '@angular/core';

export type TooltipDataValue = string | TemplateRef<void> | null

export interface TooltipData {
  value: TooltipDataValue,
  maxWidth: number
}
