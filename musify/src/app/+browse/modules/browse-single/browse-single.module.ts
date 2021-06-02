import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseSingleComponent } from './containers/browse-single/browse-single.component';
import { NzIconModule } from 'ng-zorro-antd/icon';



@NgModule({
  declarations: [
    BrowseSingleComponent
  ],
  imports: [
    CommonModule,
    NzIconModule
  ]
})
export class BrowseSingleModule { }
