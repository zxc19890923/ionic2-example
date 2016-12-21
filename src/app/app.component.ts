// 主组件
import {Component} from '@angular/core';
import {Platform, AlertController, ToastController} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';
import {TabsPage} from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;
  // 显示app首页广告信息, 5秒后隐藏
  ad:Boolean;
  message: string;

  constructor(platform:Platform, public alertCtrl:AlertController, public toastCtrl: ToastController) {
    this.ad = false;
    this.message = "";
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
    // app打开界面5庙后隐藏
    setTimeout(() => {
      this.ad = true
    }, 3000);
  }
}
