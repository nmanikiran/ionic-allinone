import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { StatusBar } from '@ionic-native/status-bar';

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
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SpeechRecognition,
    BarcodeScanner,
    TextToSpeech,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    YtProvider
  ]
})
export class AppModule { }
