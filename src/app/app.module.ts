import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {OtherPage} from "../pages/contact/otherpage";
import {ListInfo} from "../pages/home/list-info";
import {Native} from "../pages/native/native";
import {Slide} from "../pages/home/slide";
import {NewInfo} from "../pages/about/newInfo";
import {TextPage} from "../pages/about/textpage";
import {VideoPage} from "../pages/about/videopage";
import {VideoPlay} from "../pages/about/videoplay";
import {Photo} from "../pages/native/photo";
import {Version} from "../pages/native/version";
import {Mail} from "../pages/native/mail";
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    Native,
    TabsPage,
    OtherPage,
    ListInfo,
    Slide,
    NewInfo,
    TextPage,
    VideoPage,
    VideoPlay,
    Photo,
    Version,
    Mail
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true,
      platforms: {
        ios: {
          backButtonText: "返回"
        },
        md: {
          navBarAlign: "center"
        }
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    Native,
    TabsPage,
    OtherPage,
    ListInfo,
    Slide,
    NewInfo,
    TextPage,
    VideoPage,
    VideoPlay,
    Photo,
    Version,
    Mail
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {
}
