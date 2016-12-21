import {Component, ViewChild} from "@angular/core";
import {Slides} from "ionic-angular";

@Component({
  selector: "my-slide",
  templateUrl: "slide.html"
})
export class Slide {
  // mySlider 是模板中的#mySlider获取标签的内容
  @ViewChild('mySlider') slider:Slides;

  constructor() {
  }

  // 模板的[option]属性 mySlideOptions
  /*
  *    initialSlide    初始化从第几页开始播放
  *    loop            是否循环播放
  *    pager           是否添加下面的小点, 表示页码
  *    autoplay        自动播放时间间隔 毫秒
  */
  mySlideOptions = {
    initialSlide: 0,
    loop: true,
    pager: true,
    autoplay: 2000
  };
}
