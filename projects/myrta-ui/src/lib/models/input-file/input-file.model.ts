import { Subscription } from 'rxjs';

export interface UploadedFileModel {
  uuid: string;
  url?: string;
  name?: string;
  size?: number;
  tempUuid?: string;
}

export interface InputFileModel extends UploadedFileModel {
  tempUuid?: string;
  uploading?: boolean;
  percentage?: number;
  file?: File;
  error?: string;
  execution?: Subscription;
  deleting?: boolean;
}

export interface UploadedResultModel {
  message: string;
  uuid: string;
  success: boolean;
}
