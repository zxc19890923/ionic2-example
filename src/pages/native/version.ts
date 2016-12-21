import {Component, OnInit} from "@angular/core";
import {AppVersion} from "ionic-native";
import {ActionSheet} from "ionic-native"

let name = AppVersion.getAppName();
let packname = AppVersion.getPackageName();
let versioncode = AppVersion.getVersionCode();
let versionnumber = AppVersion.getVersionNumber();


@Component({
  selector: "my-version",
  templateUrl: "./version.html"
})

export class Version implements OnInit {
  vname:String;
  vpackname:String;
  vcode:String;
  vnumber:String;

  constructor() {

  }

  ngOnInit() {
    name.then((name:String)=> {
      this.vname = name;
    });
    packname.then((vpackname:String)=> {
      this.vpackname = vpackname;
    });
    versioncode.then((vcode:String) => {
      this.vcode = vcode;
    });
    versionnumber.then((vnumber:String)=> {
      this.vnumber = vnumber;
    })
  }

  showAction() {
    let buttonLabels = ['分享到微信', '分享到微博'];
    ActionSheet.show({
      'title': '操作',
      'buttonLabels': buttonLabels,
      'addCancelButtonWithLabel': '退出',
      'addDestructiveButtonWithLabel': '删除'
    }).then((buttonIndex:number) => {
      console.log('单机按钮编号: ' + buttonIndex);
    });
  }
}
