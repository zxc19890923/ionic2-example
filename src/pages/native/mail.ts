import {Component, OnInit} from "@angular/core";
import {EmailComposer} from "ionic-native";
@Component({
  selector: "my-mail",
  templateUrl: "./mail.html"
})
export class Mail implements OnInit {
  rec:String;
  title:String;
  content:String;
  email:Object;

  constructor() {
    this.rec = "";
    this.title = "";
    this.content = "";
    this.email = {
      to:  this.rec,
      cc: '15001209233@163.com',
      bcc: ['919226088@qq.com', '1993778179@qq.com'],
      attachments: [
        'file://img/logo.png',
        'res://icon.png',
        'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
        'file://README.pdf'
      ],
      subject: this.title,
      body: this.content,
      isHtml: true
    };
  }

  ngOnInit() {
  }

  sentMail() {
    EmailComposer.open(this.email);
  }
}
