import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Place } from '..models/place.model'

import { SessionService } from '../services/session.service'
import { GoogleService } from '../services/google.service'

@Component({
  selector: 'app-single-place',
  templateUrl: './single-place.component.html',
  styleUrls: ['./single-place.component.css']
})
export class SinglePlaceComponent implements OnInit {

  placeId: string;
  placeInfo = Place;

  constructor( private session: SessionService, private google: GoogleService, private route: Router, private activeRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.activeRoute.params
      .subscribe((params) => {
        this.placeId = params['id']
      })
    this.google.getInfo(this.placeId)
      .subscribe((placeInfo) => {
        this.placeInfo = placeInfo;
      })
  }

}
