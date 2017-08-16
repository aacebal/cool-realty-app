import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Subject';

import { environment } from '../../environments/environment';

@Injectable()
export class YelpService {

  constructor( private http: Http ) { }

  BASE_URL: string = 'http://localhost:3000'

  getLocations(place, sort) {
    return this.http.post(`${this.BASE_URL}/api/search/${place}`, sort, 
    { withCredentials: true }
  )
    .toPromise()
    .then(res => res.json());
  }

}
