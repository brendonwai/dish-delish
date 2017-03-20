import { Component } from '@angular/core';

import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/map'

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
  cities_array: Array<string>;
  af: AngularFire;

  constructor(af: AngularFire){
    this.af = af;
    this.cities_array = new Array<string>();
    // this.searchTerms = new Subject();
    // this.cities = af.database.list('/cities', {
    //   preserveSnapshot: true,
    //   query: {
    //     orderByKey: true,
    //     equalTo: this.searchTerms
    //   }
    // });
    // 
    // this.cities.subscribe(queriedItems => {
    //   console.log(queriedItems);
    // })
  }

  search(term: string): void{
    // if (term != '')
    //   this.searchTerms.next(term);
    // this.cities_array = [];

    if (term == '')
      this.cities_array = []
    else{
      this.cities_array = []
      let items = this.af.database.list('/cities').map(i=>{return i});
      items.forEach(i=>i.forEach(
        e=>{
          if (e.$key.toLowerCase().includes(term.toLowerCase())) 
            this.cities_array.push(e.$key)
        }));
    }
    console.log(this.cities_array);
  }
}
