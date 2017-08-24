import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Place } from '../models/place.model'

import { SessionService } from '../services/session.service'
import { YelpService } from '../services/yelp.service'

@Component({
  selector: 'app-single-place',
  templateUrl: './single-place.component.html',
  styleUrls: ['./single-place.component.css']
})
export class SinglePlaceComponent implements OnInit {

  placeId: string;
  placeInfo = Place;

  constructor( private session: SessionService, private yelp: YelpService, private route: Router, private activeRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.activeRoute.params
      .subscribe((params) => {
        this.placeId = params['id']
      })
    this.yelp.getInfo(this.placeId)
      .then((placeInfo) => {
        this.placeInfo = placeInfo;
      })
  }

}
