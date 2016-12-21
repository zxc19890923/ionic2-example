import {Component, OnInit} from "@angular/core";
import {Http, Response} from "@angular/http";
import {NavController} from "ionic-angular";
import {VideoPlay} from "./videoplay";

@Component({
  selector: "my-video",
  templateUrl: "./videopage.html"
})
export class VideoPage implements OnInit {
  data:Array<Object>;

  constructor(public http:Http, public navCtrl: NavController) {

  }

  ngOnInit() {
    this.http.get("./assets/data/video.json").subscribe((res:Response)=> {
      this.data = res.json();
      console.log(res.json());
    })
  }

  goToPlay(id) {
    this.navCtrl.push(VideoPlay, {
      id: id
    })
  }
}
