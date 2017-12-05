import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { MyApp } from './app.component';
import { HomeTPage } from '../pages/home-t/home-t';
import { ConfingTPage } from '../pages/confing-t/confing-t';
import { AboutTPage } from '../pages/about-t/about-t';
import { PerfilPage } from '../pages/perfil/perfil';
import { TabPage } from '../pages/tab/tab';
import { TabPageModule } from '../pages/tab/tab.module';
import { HomeTPageModule } from '../pages/home-t/home-t.module';
import { ConfingTPageModule } from '../pages/confing-t/confing-t.module';
import { AboutTPageModule } from '../pages/about-t/about-t.module';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    PerfilPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    TabPageModule,
    HomeTPageModule,
    ConfingTPageModule,
    AboutTPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomeTPage,
    ConfingTPage,
    AboutTPage,
    PerfilPage,
    TabPage
  ],
  providers: [
    InAppBrowser,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
