import { Component, NgModule, NgZone, OnInit, Inject } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { AgmCoreModule, MapsAPILoader } from 'angular2-google-maps/core';
import { BrowserModule } from "@angular/platform-browser";
import 'rxjs/add/operator/map'

import {} from '@types/googlemaps'

declare var google: any;

@Component({
  moduleId: module.id,
  selector: 'map-display',
  templateUrl: './map.component.html',
  styleUrls: [ './map.component.css' ]
})

export class MapComponent{
  lat = 39.8282;
  lng = -98.5795;
  zoom = 4;
  items: FirebaseListObservable<any>;

  constructor(af: AngularFire){
    this.items = af.database.list('/cities');
  }

  
  // constructor(
  // 	af: AngularFire,
  // 	private mapsAPILoader: MapsAPILoader,
  //   private ngZone: NgZone){
  // 	this.cities = af.database.list('/cities');
  // 	this.city_results = new Array<any>();
  // }

  // ngOnInit(){



   //  let items = this.cities.map(i=>{return i});
   //  let cresults = [];
   //  let c_lat = new Array<any>();
   //  let c_lng = new Array<any>();

  	// this.mapsAPILoader.load().then(() => {
  	//   let geocoder = new google.maps.Geocoder();
  	//   let i = 0;

   //    items.forEach(i=>i.forEach(
   //      e=>{
	  //     geocoder.geocode({'address':e.$key}, function(results, status){
	  //     	if (status == google.maps.GeocoderStatus.OK){
		 //  		c_lat.push(results[0].geometry.location.lat());
		 //  		c_lng.push(results[0].geometry.location.lng());
		 //  		cresults.push(results[0]);
	  //     	}
	  //     	else{
	  //     	  console.log("Failed to geocode: " + e.$key);
	  //     	}
	  //     })
   //      }));

   //    // geocoder.addListener("list_updated",() => {
   //    	this.ngZone.run(() =>{
   //    		// this.cities_lat = c_lat;
   //    		// this.cities_lng = c_lng;
   //    		this.city_results = cresults;
   //    		console.log(this.city_results[0])
   //    	});
   //    // });

   //    console.log(this.city_results[0]);

  	// });

  	// console.log(this.lat);

  	// console.log('second'+this.lat);

  	// console.log(this.c_lat);
  	// console.log(this.c_lat[0]);
  	// console.log(c_lng);

  	// this.city_results = cresults;
  	// console.log(cresults);
  	// console.log(cresults[0]);
  	// let test = new Array<any>();
  	// test.push(1);
  	// test.push(2);
  	// console.log(test);
  	// console.log(test[0]);


  	// for (let i = 0; i < this.city_results.length; i++){
  		// let x: [any, any]
  		// console.log(this.city_results[i].geometry.location.lat());
  		// x = [
  		// 	this.city_results[i].geometry.location.lat(),
  		// 	this.city_results[i].geometry.location.lng()]
  		// c_lat_long.push(x);
  	// }

  	// this.city_lat_long = c_lat_long;
  	// console.log(this.city_results);
  	// console.log(this.city_lat_long);
  // }

  // setLatLng(lat, long){
  // 	console.log('hi '+lat);
  // 	this.lat = lat;
  // 	this.lng = long;
  // }

}