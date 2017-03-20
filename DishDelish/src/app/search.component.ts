import { Component } from '@angular/core';

import { Subject } from 'rxjs/Subject';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'search-bar',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.css' ]
})

export class SearchComponent{
  cities: FirebaseListObservable<any[]>;
  private searchTerms: Subject<any>;

  constructor(af: AngularFire){
    this.searchTerms = new Subject();
    this.cities = af.database.list('/cities', {
      query: {
        orderByKey: true,
        equalTo: this.searchTerms
      }
    });
    this.cities.subscribe(queriedItems => {
      console.log(queriedItems);
    })
  }

  search(term: string): void{
    this.searchTerms.next(term);
  }
}
