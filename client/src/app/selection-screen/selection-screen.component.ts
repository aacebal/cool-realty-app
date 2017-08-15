import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { YelpService } from '../services/yelp.service';
import { ActivatedRoute, Router} from '@angular/router';
import { SessionService } from '../services/session.service';
import { User } from '../models/user.model';
import { Place } from '../models/place.model';

@Component({
  selector: 'app-selection-screen',
  templateUrl: './selection-screen.component.html',
  styleUrls: ['./selection-screen.component.css']
})
export class SelectionScreenComponent implements OnInit {

  errorMessage: string;
  isLoggedIn: boolean = false;
  places: Place[];

constructor(private yelp: YelpService, private session: SessionService, private router: Router, activeRouter: ActivatedRoute ) { }

ngOnInit() {
  this.session.loggedIn$.subscribe((userFromApi) => {
  this.isLoggedIn = true;
  })
}

getPlaces(place) {
  this.yelp.getLocations(place)
    .then((placesFromAPI) => {
      this.places = placesFromAPI;
      console.log(this.places);
    })
}

}
