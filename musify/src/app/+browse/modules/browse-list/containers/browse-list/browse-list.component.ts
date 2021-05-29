import { Component, OnInit } from '@angular/core';
import { BrowseQuery } from 'src/app/+browse/store/browse.query';
import { BrowseService } from 'src/app/+browse/store/browse.service';

@Component({
  selector: 'app-browse-list',
  templateUrl: './browse-list.component.html',
  styleUrls: ['./browse-list.component.scss']
})
export class BrowseListComponent implements OnInit {
  songs$ = this.browseQuery.selectAll();

  constructor(
    private browseService: BrowseService,
    private browseQuery: BrowseQuery
  ) { }

  ngOnInit(): void {
    this.browseService.getSongs();
  }

}
