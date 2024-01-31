import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UploadedResultModel } from 'myrtex-mf-ui';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http: HttpClient) {
  }

  upload(url: string, formData: FormData): Observable<HttpEvent<UploadedResultModel>> {
    return this.http.post<UploadedResultModel>(url, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  delete(url: string, formData: FormData): Observable<UploadedResultModel> {
    return this.http.post<UploadedResultModel>(url, formData);
  }
}
