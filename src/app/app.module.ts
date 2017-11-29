import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppMinimize } from '@ionic-native/app-minimize';
import { Badge } from '@ionic-native/badge';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { BatteryStatus } from '@ionic-native/battery-status';
import { Brightness } from '@ionic-native/brightness';
import { Calendar } from '@ionic-native/calendar';
import { CallNumber } from '@ionic-native/call-number';
import { Camera } from '@ionic-native/camera';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
import { Flashlight } from '@ionic-native/flashlight';
import { Geolocation } from '@ionic-native/geolocation';
import { HeaderColor } from '@ionic-native/header-color';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { Network } from '@ionic-native/network';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { SMS } from '@ionic-native/sms';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Vibration } from '@ionic-native/vibration';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { ImageProvider } from '../providers/image/image';
import { ToastProvider } from '../providers/toast/toast';
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
    NativePageTransitions,
    ImageProvider,
    PhotoViewer,
    ToastProvider,
    Camera,
    BatteryStatus

  ]
})
export class AppModule { }
