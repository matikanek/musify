import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from './containers/browse/browse.component';
import { BrowseListComponent } from './modules/browse-list/containers/browse-list/browse-list.component';

const routes: Routes = [
  {
    path: '',
    component: BrowseComponent,
    children: [
      {
        path: '',
        component: BrowseListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrowseRoutingModule { }
