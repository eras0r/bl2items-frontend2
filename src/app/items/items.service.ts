import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {environment} from '../../environments/environment';
import {Item} from './item';
import {ItemFilter} from './item-filter';

@Injectable()
export class ItemsService {

  constructor(private http: Http) {

  }

  getItems(filter?: ItemFilter): Observable<Item[]> {
    const options = {
      params: {
        filter: filter
      }
    };

    return this.http
      .get(environment.apiUrl + 'items/', options)
      .map(response => response.json());
  }

}
