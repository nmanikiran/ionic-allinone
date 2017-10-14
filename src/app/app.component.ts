import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = 'YoutubePage';

  pages: PageInterface[];

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Youtube', pageName: 'YoutubePage', tabComponent: 'YoutubePage', index: 0, icon: 'home' },
      { title: 'Flashlight', pageName: 'FlashlightPage', tabComponent: 'FlashlightPage', index: 1, icon: 'light' },
      { title: 'Map', pageName: 'MapsPage', tabComponent: 'MapsPage', index: 2, icon: 'light' },
      { title: 'Bar/QR Code', pageName: 'BarcodePage', tabComponent: 'BarcodePage', index: 3, icon: 'light' },
      { title: 'Text to Speech', pageName: 'TtsPage', tabComponent: 'TtsPage', index: 4, icon: 'light' },
      { title: 'Speech to Text', pageName: 'SttPage', tabComponent: 'SttPage', index: 5, icon: 'light' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page: PageInterface) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.tabComponent);
  }
}
