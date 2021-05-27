import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';
import { NzIconModule } from 'ng-zorro-antd/icon';

const components = [
  HeaderComponent,
  ContentComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ],
  imports: [
    CommonModule,
    NzIconModule
  ]
})
export class LayoutModule { }
