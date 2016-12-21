import {Component} from "@angular/core";
import {NavParams} from "ionic-angular";

@Component({
  templateUrl: "videoplay.html"
})

export class VideoPlay {
  id:String;

  constructor(public navParams:NavParams) {
    this.id = navParams.get("id");
    console.log(this.id);
  }
}
