import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Subject';

import { User } from '../models/user.model'
import { environment } from '../../environments/environment';


@Injectable()
export class SessionService {

  constructor() { }

}
