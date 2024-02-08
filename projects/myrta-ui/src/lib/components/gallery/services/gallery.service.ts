import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

declare let $: any;

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) {
  }

  rotate(rotatePhotos: any[], url: string): Observable<any> {
    return this.http.post<any>(`${url}`, rotatePhotos);
  }

  delete(url: string, uuid: string): Observable<any> {
    return this.http.delete<any>(`${url}/${uuid}`);
  }

  update(url: string, uuid: string, newValue: string): Observable<any> {
    return this.http.put<any>(`${url}`, {
      uuid: uuid,
      description: newValue
    });
  }
}
