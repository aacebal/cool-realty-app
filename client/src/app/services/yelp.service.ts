import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Subject';

import { environment } from '../../environments/environment';

@Injectable()
export class YelpService {

  constructor( private http: Http ) { }

  BASE_URL: string = environment.BASE_URL;

  getLocations(place, sort) {
    return this.http.get(`${this.BASE_URL}/api/search/${place}&${sort}`,
    { withCredentials: true }
  )
    .toPromise()
    .then(res => res.json());
  }

  getInfo(placeId) {
    return this.http.get(`${this.BASE_URL}/api/get-info/${placeId}`,
    { withCredentials: true }
  )
    .toPromise()
    .then(res => res.json());
  }

}
