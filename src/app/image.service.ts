import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor() {}

  blobToUrl(response: any): string {
    var urlCreator = window.URL;
    var imageURL = urlCreator.createObjectURL(response);
    return imageURL;
  }
}
