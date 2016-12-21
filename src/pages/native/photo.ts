import {Component} from "@angular/core";
import {NavParams} from "ionic-angular";
import { PhotoViewer } from 'ionic-native';

@Component({
  templateUrl: "./photo.html"
})
export class Photo {
  id: String;
  constructor(public navParams: NavParams) {
    this.id = navParams.get("id");
    console.log(this.id);
  }
  showImg() {
    PhotoViewer.show('http://n.sinaimg.cn/news/transform/20161217/yMM1-fxytqax6378504.jpg');
  }
}
