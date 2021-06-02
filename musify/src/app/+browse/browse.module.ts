import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseComponent } from './containers/browse/browse.component';
import { BrowseRoutingModule } from './browse-routing.module';
import { BrowseListModule } from './modules/browse-list/browse-list.module';
import { BrowseSingleModule } from './modules/browse-single/browse-single.module';



@NgModule({
  declarations: [
    BrowseComponent
  ],
  imports: [
    CommonModule,
    BrowseRoutingModule,
    BrowseListModule,
    BrowseSingleModule
  ]
})
export class BrowseModule { }
