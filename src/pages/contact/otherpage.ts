import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
@Component({
  templateUrl: "otherPage.html"
})
export class OtherPage {
  id: String;
  constructor(public navCtrl: NavController, private navParams: NavParams) {
    // alert(navParams.get("id"));
    this.id = navParams.get("id");
  }
  goBack() {
    this.navCtrl.pop();
  }
}
