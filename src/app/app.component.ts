import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import * as htmlToImage from 'html-to-image';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stock-calendar';
  @ViewChild('tpl', { read: ElementRef, static: false }) tpl: ElementRef<any>;
  download() {
    htmlToImage.toJpeg(this.tpl.nativeElement)
      .then(function (dataUrl) {
        let link = document.createElement('a');
        link.download = 'export.jpg';
        link.href = dataUrl;
        link.click();
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  }
}
