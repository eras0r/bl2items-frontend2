import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Item} from '../item';
import {ItemsService} from '../items.service';

@Component({
  selector: 'app-all-items-grid',
  templateUrl: './all-items-grid.component.html',
  styleUrls: ['./all-items-grid.component.scss']
})
export class AllItemsGridComponent implements OnInit {

  public items: Observable<Item[]>;

  constructor(private itemService: ItemsService) {

  }

  ngOnInit() {
    this.items = this.loadItems();
  }

  loadItems(): Observable<Item[]> {
    return this.itemService.getItems();
  }

}
