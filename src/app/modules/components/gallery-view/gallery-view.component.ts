import { Component, OnInit } from '@angular/core';
import {
  GalleryItemModel
} from '../../../../../projects/myrta-ui/src/lib/components/gallery/models/gallery-item.model';
import { GalleryService } from './gallery.service';

@Component({
  selector: 'mrx-gallery-view',
  templateUrl: './gallery-view.component.html',
  styleUrls: ['./gallery-view.component.less']
})
export class GalleryViewComponent implements OnInit {
  public galleryData: GalleryItemModel[] = []

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.galleryService.getImages().subscribe((res: any) => {
      this.galleryData = res.data
    })
  }

  addPreview() {
    this.galleryData.push({
      uuid: '34343434',
      imageName: 'asdasdas',
      url: 'https://lipsum.app/id/11/2000x1500',
      previewUrl: 'https://lipsum.app/id/11/200x150',
      description: '1231231231',
      previewImageId: '343434',
    })
  }
}
