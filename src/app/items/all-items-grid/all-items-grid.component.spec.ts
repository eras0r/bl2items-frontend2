import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import {AllItemsGridComponent} from './all-items-grid.component';
import {ItemsService} from '../items.service';
import {MockItemsService} from '../mock-items.service';

describe('AllItemsGridComponent', () => {
  let component: AllItemsGridComponent;
  let fixture: ComponentFixture<AllItemsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AllItemsGridComponent],
      providers: [{provide: ItemsService, useClass: MockItemsService}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllItemsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should load the items from ItemsService without any filter', inject([ItemsService], (itemsService: ItemsService) => {
    expect(itemsService.getItems).toHaveBeenCalledWith();
  }));

  // TODO add tests for the component itself

});
