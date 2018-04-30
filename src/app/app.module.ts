import { ProfileHomePage } from './../pages/profile-home/profile-home';
import { BasicInfoPage } from './../pages/profile-home/basic-info/basic-info';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, DeepLinkConfig } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

export const deepLinkConfig: DeepLinkConfig = {
  links: [ 
    { component: HomePage, name: "home", segment: ""},
    { component: BasicInfoPage, name: "basic-info", segment: "basic-info"},
    { component: ProfileHomePage, name: "profile-home", segment: "profile-home"},
  ]
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      preloadModules: true,
      locationStrategy: 'path'}),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
