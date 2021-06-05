import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Song } from 'src/app/shared/models/song.model';
import { SortOrder, SortProperty } from '../../shared/browse-list.model';

@Component({
  selector: 'app-browse-list-list',
  templateUrl: './browse-list-list.component.html',
  styleUrls: ['./browse-list-list.component.scss']
})
export class BrowseListListComponent {
  @Input() songs: Song[] = [];
  @Input() filtersForm: FormGroup = {} as FormGroup;

  sortProperty = SortProperty;
  sortOrder = SortOrder;

  constructor(private router: Router) { }

  get searchOrderControl(): FormControl {
    return this.filtersForm.get('sortOrder') as FormControl;
  }

  onSelect(songId: number): void {
    this.router.navigate([`/browse/${songId}`]);
  }

  setOrder(order: SortOrder): void {
    this.searchOrderControl.setValue(order);
  }

}
