import {Http, HttpModule, Response, ResponseOptions, XHRBackend} from '@angular/http';
import {async, inject, TestBed} from '@angular/core/testing';
import {MockBackend, MockConnection} from '@angular/http/testing';

import 'rxjs/add/operator/toPromise';

import {ItemsService} from './items.service';
import {Item} from './item';
import {Weapon} from '../weapon/weapon';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {ItemFilter} from './item-filter';

const fakeItems: Item[] = [
  new Weapon(),
  new Weapon()
];

describe('ItemsService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [ItemsService, {provide: XHRBackend, useClass: MockBackend}]
    });
  });

  it('should be created', inject([ItemsService], (service: ItemsService) => {
    expect(service).toBeTruthy();
  }));

  describe('getItems()', () => {
    let backend: MockBackend;
    let httpSpy: Http;
    let successFulResponse: Response;
    let errorResponse: Error;

    beforeEach(inject([Http, XHRBackend], (http: Http, be: MockBackend) => {
      backend = be;
      httpSpy = http;

      spyOn(httpSpy, 'get').and.callThrough();

      const options = new ResponseOptions({status: 200, body: fakeItems});
      successFulResponse = new Response(options);
      errorResponse = new Error();
    }));

    it('should return an Observable', async(inject([ItemsService], (service: ItemsService) => {
      expect(service.getItems() instanceof Observable).toBe(true);
    })));

    describe('should call the REST API endpoint properly', () => {

      it('without filter', async(inject([ItemsService], (service: ItemsService) => {
        service.getItems();

        const url = environment.apiUrl + 'items/';
        const options = {
          params: {
            filter: undefined
          }
        };

        expect(httpSpy.get).toHaveBeenCalledWith(url, options);
      })));

      it('with filter', async(inject([ItemsService], (service: ItemsService) => {
        const itemFilter = new ItemFilter(new Weapon());
        service.getItems(itemFilter);

        const url = environment.apiUrl + 'items/';
        const options = {
          params: {
            filter: itemFilter
          }
        };

        expect(httpSpy.get).toHaveBeenCalledWith(url, options);
      })));

    });

    it('should contain the items returned by the REST API', async(inject([ItemsService], (service: ItemsService) => {
      backend.connections.subscribe((c: MockConnection) => c.mockRespond(successFulResponse));

      service.getItems().subscribe(
        items => {
          expect(items).toEqual(fakeItems, 'should have expected items');
        });
    })));

    it('should contain the error in case the REST API calls was erroneous', async(inject([ItemsService], (service: ItemsService) => {
      backend.connections.subscribe((c: MockConnection) => c.mockError(errorResponse));

      service.getItems().subscribe(
        items => {

        },
        err => {
          expect(err).toBe(errorResponse);
        });
    })));

  });

});
