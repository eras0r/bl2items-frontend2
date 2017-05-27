import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {} from 'jasmine';

import {ItemFilter} from './item-filter';
import {Weapon} from '../weapon/weapon';

@Injectable()
export class MockItemsService {

  getItems = jasmine.createSpy('getItems').and.callFake((filter?: ItemFilter) => {
    Observable.create(() => {
      return [
        // TODO maybe create better mocks
        new Weapon(),
        new Weapon()
      ];
    });
  });

}
