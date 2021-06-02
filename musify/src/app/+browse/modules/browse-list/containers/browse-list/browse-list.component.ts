import { Component, OnInit } from '@angular/core';
import { BrowseQuery } from 'src/app/+browse/store/browse.query';
import { BrowseService } from 'src/app/+browse/store/browse.service';
import { BrowseListFormFactory } from '../../shared/browse-list-form.factory';
import { debounceTime, distinctUntilChanged } from 'rxjs/internal/operators';

@Component({
  selector: 'app-browse-list',
  templateUrl: './browse-list.component.html',
  styleUrls: ['./browse-list.component.scss']
})
export class BrowseListComponent implements OnInit {
  songs$ = this.browseQuery.selectAll();
  filtersForm = this.browseListFormFactory.buildForm();

  constructor(
    private browseService: BrowseService,
    private browseQuery: BrowseQuery,
    private browseListFormFactory: BrowseListFormFactory
  ) { }

  ngOnInit(): void {
    this.browseService.getSongs();
    this.filtersForm.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )  
      .subscribe((value) => {
        this.onSearch();
        console.log(value);
      });
  }
  onSearch(): void {
    this.browseService.getSongs(this.filtersForm.value);
  }
}

