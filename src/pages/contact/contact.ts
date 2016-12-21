import {Component, OnInit} from '@angular/core';
import {Http, Response} from "@angular/http";
import { NavController } from 'ionic-angular';
// 要跳转的界面 组件
import {OtherPage} from "./otherpage";
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage implements OnInit {
  items: Array<Object>;
  constructor(public navCtrl: NavController, public http: Http) {
  }
  // 获取服务器数据
  ngOnInit() {
    this.http.get("./assets/data/team.json").subscribe((res:Response)=>{
      this.items = res.json();
      console.log(res.json());
    })
  }
  // 书写界面跳转函数, 绑定到界面上即可
  goToOtherPage(id) {
    this.navCtrl.push(OtherPage, {
      id: id
    });
  }
}
