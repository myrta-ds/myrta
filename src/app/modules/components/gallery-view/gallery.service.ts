import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) { }

  getImages() {
    return this.http.get('https://todo-a7861.firebaseio.com/gallery.json')
  }
}
