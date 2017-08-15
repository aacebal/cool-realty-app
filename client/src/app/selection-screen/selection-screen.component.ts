import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { YelpService } from '../services/yelp.service';
import { ActivatedRoute, Router} from '@angular/router';
import { SessionService } from '../services/session.service';
import { User } from '../models/user.model';
import { Location } from '../models/Location.model';

@Component({
  selector: 'app-selection-screen',
  templateUrl: './selection-screen.component.html',
  styleUrls: ['./selection-screen.component.css']
})
export class SelectionScreenComponent implements OnInit {

  errorMessage: string;
  isLoggedIn: boolean = false;
  locations: Location[];

constructor(private yelp: YelpService, private session: SessionService, private router: Router, activeRouter: ActivatedRoute ) { }

ngOnInit() {
  this.session.loggedIn$.subscribe((userFromApi) => {
  this.isLoggedIn = true;
  })
}

getPlaces(place) {
  console.log(place);
  this.yelp.getLocations(place)
    .then((locationsfromAPI) => {
      this.locations = locationsfromAPI.businesses;
      console.log(this.locations);
    })
}

}
