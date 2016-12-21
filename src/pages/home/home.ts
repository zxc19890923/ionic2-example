import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Http, Response} from "@angular/http";

import {ListInfo} from "./list-info";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage implements OnInit {
  data:Array<Object>;
  name:String;
  code:String;

  constructor(public navCtrl:NavController, public http:Http) {
  }

  ngOnInit() {
    // 使用http从服务器获取数据
    this.http.get('./assets/data/user.json')
      .subscribe((res:Response) => {
        this.data = res.json();
        console.log(res.json());
      });
  }

  // 单机条目,传递参数到详情界面
  goToInfo(name, id, message, img) {
    this.navCtrl.push(ListInfo, {
      username: name,
      id: id,
      message: message,
      img: img
    })
  }
}
