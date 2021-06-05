import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseListComponent } from './containers/browse-list/browse-list.component';
import { BrowseListListComponent } from './components/browse-list-list/browse-list-list.component';
import { TypoghaphyModule } from 'src/app/shared/modules/typoghaphy/typoghaphy.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowseListFormFactory } from './shared/browse-list-form.factory';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [
    BrowseListComponent,
    BrowseListListComponent
  ],
  imports: [
    CommonModule,
    TypoghaphyModule,
    NzInputModule,
    ReactiveFormsModule,
    NzRadioModule,
    NzIconModule
  ],
  providers: [
    BrowseListFormFactory
  ]
})
export class BrowseListModule { }
