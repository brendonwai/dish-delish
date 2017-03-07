import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dish Delish';
  items: FirebaseListObservable<any[]>;
  constructor(af: AngularFire){
    this.items = af.database.list('/cities');
  }
}
