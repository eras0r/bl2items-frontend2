import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';

import {ItemsRoutingModule} from './items-routing.module';
import {AllItemsGridComponent} from './all-items-grid/all-items-grid.component';
import {ItemsService} from './items.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ItemsRoutingModule
  ],
  declarations: [AllItemsGridComponent],
  providers: [ItemsService]
})
export class ItemsModule {

}
