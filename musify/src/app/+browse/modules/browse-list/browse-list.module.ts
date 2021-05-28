import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseListComponent } from './containers/browse-list/browse-list.component';
import { BrowseListListComponent } from './components/browse-list-list/browse-list-list.component';



@NgModule({
  declarations: [
    BrowseListComponent,
    BrowseListListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BrowseListModule { }
