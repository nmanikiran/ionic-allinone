import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Brightness } from '@ionic-native/brightness';
import { CallNumber } from '@ionic-native/call-number';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
import { Flashlight } from '@ionic-native/flashlight';
import { Geolocation } from '@ionic-native/geolocation';
import { HeaderColor } from '@ionic-native/header-color';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Network } from '@ionic-native/network';
import { SMS } from '@ionic-native/sms';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Vibration } from '@ionic-native/vibration';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { Badge } from '@ionic-native/badge';
import { AppMinimize } from '@ionic-native/app-minimize';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { Calendar } from '@ionic-native/calendar';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


import { YtProvider } from '../providers/yt/yt';
import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    IonicModule.forRoot(MyApp)
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
    InAppBrowser,
    FingerprintAIO,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    YtProvider,
    Brightness,
    Vibration,
    HeaderColor,
    Badge,
    Calendar,
    AppMinimize,
    NativePageTransitions
  ]
})
export class AppModule { }
