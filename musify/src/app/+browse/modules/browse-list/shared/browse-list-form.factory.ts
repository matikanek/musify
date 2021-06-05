import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SortOrder, SortProperty } from './browse-list.model';

@Injectable({
  providedIn: 'root'
})
export class BrowseListFormFactory {

  constructor(private formBuilder: FormBuilder) { }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      search: [''],
      sortProperty: [SortProperty.numerative],
      sortOrder: [SortOrder.ascending]
    });
  }
}
