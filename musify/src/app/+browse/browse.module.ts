import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseComponent } from './containers/browse/browse.component';
import { BrowseRoutingModule } from './browse-routing.module';



@NgModule({
  declarations: [
    BrowseComponent
  ],
  imports: [
    CommonModule,
    BrowseRoutingModule
  ]
})
export class BrowseModule { }
