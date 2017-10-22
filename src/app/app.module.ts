import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NFC, Ndef } from '@ionic-native/nfc';

import { NfcReaderComponent } from '../components/nfc-reader/nfc-reader';
import {NfcPage} from "../pages/nfc/nfc";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    NfcPage,
    NfcReaderComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    NfcPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NFC,
    Ndef,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
