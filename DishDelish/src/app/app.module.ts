import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyD8LaKHrqt12K-H1XXf2MfPt6BAEy6xCA4",
  authDomain: "dishdelish-f559d.firebaseapp.com",
  databaseURL: "https://dishdelish-f559d.firebaseio.com",
  storageBucket: "dishdelish-f559d.appspot.com",
  messagingSenderId: "284773768656"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
