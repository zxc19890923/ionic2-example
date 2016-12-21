import {Component} from "@angular/core";
import {NavParams} from "ionic-angular";
@Component({
  templateUrl: "newInfo.html"
})

export class NewInfo {
  id:String;
  title:String;
  img:String;
  contain:Array<String>;
  url:String;

  constructor(public navParams:NavParams) {
    this.title = navParams.get("title");
    this.id = navParams.get("id");
    this.contain = navParams.get("contain");
    this.img = navParams.get("img");
    this.url = navParams.get("url");
  }
}
