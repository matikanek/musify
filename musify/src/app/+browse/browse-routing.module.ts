import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from './containers/browse/browse.component';
import { BrowseListComponent } from './modules/browse-list/containers/browse-list/browse-list.component';
import { BrowseSingleComponent } from './modules/browse-single/containers/browse-single/browse-single.component';

const routes: Routes = [
  {
    path: '',
    component: BrowseComponent,
    children: [
      {
        path: '',
        component: BrowseListComponent
      },
      {
        path: ':songId',
        component: BrowseSingleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrowseRoutingModule { }
