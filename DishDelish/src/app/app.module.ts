import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { SearchComponent } from './search.component';
import { MapComponent } from './map.component';

import { AgmCoreModule } from 'angular2-google-maps/core';

export const firebaseConfig = {
  apiKey: "AIzaSyD8LaKHrqt12K-H1XXf2MfPt6BAEy6xCA4",
  authDomain: "dishdelish-f559d.firebaseapp.com",
  databaseURL: "https://dishdelish-f559d.firebaseio.com",
  storageBucket: "dishdelish-f559d.appspot.com",
  messagingSenderId: "284773768656"
};

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB4F_bA0He9UflNGk3__DTfGTaHX3aUMP0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
