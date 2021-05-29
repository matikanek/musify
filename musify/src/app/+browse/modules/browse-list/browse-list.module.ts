import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseListComponent } from './containers/browse-list/browse-list.component';
import { BrowseListListComponent } from './components/browse-list-list/browse-list-list.component';
import { TypoghaphyModule } from 'src/app/shared/modules/typoghaphy/typoghaphy.module';



@NgModule({
  declarations: [
    BrowseListComponent,
    BrowseListListComponent
  ],
  imports: [
    CommonModule,
    TypoghaphyModule
  ]
})
export class BrowseListModule { }
