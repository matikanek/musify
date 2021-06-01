import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BrowseQuery } from 'src/app/+browse/store/browse.query';
import { BrowseService } from 'src/app/+browse/store/browse.service';

@Component({
  selector: 'app-browse-list',
  templateUrl: './browse-list.component.html',
  styleUrls: ['./browse-list.component.scss']
})
export class BrowseListComponent implements OnInit, OnDestroy {
  songs = [];
  unsubscribeSongs = new Subject();
  songs$: Observable<any>;

  constructor(
    private browseService: BrowseService,
    private browseQuery: BrowseQuery
  ) { }

  ngOnInit(): void {
    console.log('I am in');
    this.browseService.getSongs();
    //this.getSongsUsingSubscribeMethod();
    this.getSongsUsingAsyncPipe();
  }

  ngOnDestroy(): void {
    this.unsubscribeSongs.next();
    this.unsubscribeSongs.complete();
    console.log('good bye');
  }

  getSongsUsingSubscribeMethod(): void {
    this.browseQuery
      .selectAll()
      .pipe(takeUntil(this.unsubscribeSongs))
      .subscribe((songs) => {
        this.songs = songs;
        console.log('subscribe');
      });
  }

  getSongsUsingAsyncPipe(): void {
    this.songs$ = this.browseQuery.selectAll();
    console.log('subscribe async pipe');
  }
}
