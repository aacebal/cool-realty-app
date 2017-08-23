import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Subject';

import { Place } from '../models/place.model';
import { environment } from '../../environments/environment';

@Injectable()
export class GoogleService {

  BASE_URL: string = environment.BASE_URL;

  constructor(private http: Http) { }

  getInfo(placeId) {
    this.http.get(`${this.BASE_URL}/api/place-info/${placeId}`,
    { withCredentials: true },
  )
    .toPromise()
    .then(res => res.json())
  }
}
