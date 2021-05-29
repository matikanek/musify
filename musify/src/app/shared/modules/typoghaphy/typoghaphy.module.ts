import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from './components/heading/heading.component';

const components = [
  HeadingComponent
]

@NgModule({
  declarations: [
    ... components
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ... components
  ]
})
export class TypoghaphyModule { }
