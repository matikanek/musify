import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';

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
    CommonModule
  ]
})
export class LayoutModule { }
