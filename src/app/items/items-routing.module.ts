import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllItemsGridComponent} from './all-items-grid/all-items-grid.component';
import {ItemsService} from './items.service';

const routes: Routes = [
  {
    path: 'items',
    component: AllItemsGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ItemsService]
})
export class ItemsRoutingModule {

}
