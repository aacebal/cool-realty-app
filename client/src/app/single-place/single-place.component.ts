import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SessionService } from '../services/session.service'

@Component({
  selector: 'app-single-place',
  templateUrl: './single-place.component.html',
  styleUrls: ['./single-place.component.css']
})
export class SinglePlaceComponent implements OnInit {

  placeId: string;

  constructor( private session: SessionService, private route: Router, private activeRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.activeRoute.params
      .subscribe((params) => {
        this.placeId = params['id']
      })
  }

}
