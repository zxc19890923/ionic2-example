import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {Photo} from "./photo";
import {Version} from "./version";
import {Mail} from "./mail";

@Component({
  selector: "my-native",
  templateUrl: "native.html"
})
export class Native {
  constructor(public navCtrl:NavController) {

  }

  // 相册界面
  goToPhoto(id) {
    this.navCtrl.push(Photo, {
      id: id
    })
  }

  // 版本信息
  goToVersion() {
    this.navCtrl.push(Version);
  }

  // 邮件
  goToMail() {
    this.navCtrl.push(Mail);
  }
}

