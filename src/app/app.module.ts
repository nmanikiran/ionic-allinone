import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { CallNumber } from '@ionic-native/call-number';
import { Flashlight } from '@ionic-native/flashlight';
import { Geolocation } from '@ionic-native/geolocation';
import { Network } from '@ionic-native/network';
import { SMS } from '@ionic-native/sms';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { YtProvider } from '../providers/yt/yt';
import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Flashlight,
    SpeechRecognition,
    BarcodeScanner,
    TextToSpeech,
    Geolocation,
    YoutubeVideoPlayer,
    CallNumber,
    Network,
    SMS,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    YtProvider
  ]
})
export class AppModule { }
