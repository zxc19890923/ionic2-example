import {Component} from '@angular/core';
import {TextPage} from "./textpage";
import {VideoPage} from "./videopage";

@Component({
  templateUrl: 'about.html'
})
export class AboutPage{
  segmentNew: String;
  tab1Root: any = TextPage;
  tab2Root: any = VideoPage;
  constructor() {
    this.segmentNew = "text";
  }
}
