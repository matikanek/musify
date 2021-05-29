import { Component, Input, OnInit } from '@angular/core';
import { Song } from 'src/app/shared/models/song.model';

@Component({
  selector: 'app-browse-list-list',
  templateUrl: './browse-list-list.component.html',
  styleUrls: ['./browse-list-list.component.scss']
})
export class BrowseListListComponent implements OnInit {
  @Input() songs: Song[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
