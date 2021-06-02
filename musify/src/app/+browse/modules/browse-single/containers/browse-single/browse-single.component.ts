import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrowseQuery } from 'src/app/+browse/store/browse.query';
import { BrowseService } from 'src/app/+browse/store/browse.service';

@Component({
  selector: 'app-browse-single',
  templateUrl: './browse-single.component.html',
  styleUrls: ['./browse-single.component.scss']
})
export class BrowseSingleComponent implements OnInit {
  song$ = this.browseQuery.select(state => state.song);

  constructor(
    private activatedRoute: ActivatedRoute,
    private browseService: BrowseService,
    private browseQuery: BrowseQuery,
  ) { }

  ngOnInit(): void {
    this.browseService.getSong(+this.activatedRoute.snapshot.params.songId);
  }

}
