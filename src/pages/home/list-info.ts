import {Component} from "@angular/core";
import {NavParams} from "ionic-angular";
@Component({
  templateUrl: "info.html"
})
export class ListInfo {
  id: String;
  username: String;
  message: String;
  img: String;
  constructor(public navParams: NavParams) {
    this.id = navParams.get("id");
    this.username = navParams.get("username");
    this.message = navParams.get("message");
    this.img = navParams.get("img");
  }
}
