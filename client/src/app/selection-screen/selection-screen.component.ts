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
  visible: boolean = false;
  best_match: any;

constructor(private yelp: YelpService, private session: SessionService, private router: Router, activeRouter: ActivatedRoute ) { }

ngOnInit() {
  this.session.loggedIn$.subscribe((userFromApi) => {
  this.isLoggedIn = true;
  })
}

getPlaces(place, sort) {
  this.yelp.getLocations(place, sort)
    .then((locationsFromAPI) => {
      this.locations = locationsFromAPI.businesses;
      console.log(locationsFromAPI);
    })
}

onMouseOver(): void {
   this.visible = true;
 }

 onMouseOut(): void {
   this.visible = false;
 }

}
