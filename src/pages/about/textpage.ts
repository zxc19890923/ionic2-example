import {Component, OnInit} from '@angular/core';
import {Http, Response} from "@angular/http";
import {NavController} from 'ionic-angular';
import {NewInfo} from "./newInfo";

@Component({
  selector: "my-text",
  templateUrl: "./textpage.html"
})
export class TextPage implements OnInit {
  data: Response;
  constructor(public navCtrl:NavController, public http:Http) {

  }

  ngOnInit() {
    this.http.get("./assets/data/news.json").subscribe((res:Response)=>{
      this.data = res.json();
      console.log(res.json());
    })
  }

  goToInfo(id, title, img, contain) {
    this.navCtrl.push(NewInfo, {
      id: id,
      title: title,
      img: img,
      contain: contain
    })
  }
}
