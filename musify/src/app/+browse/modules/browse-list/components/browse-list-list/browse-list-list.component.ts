import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Song } from 'src/app/shared/models/song.model';

@Component({
  selector: 'app-browse-list-list',
  templateUrl: './browse-list-list.component.html',
  styleUrls: ['./browse-list-list.component.scss']
})
export class BrowseListListComponent implements OnInit {
  @Input() songs: Song[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSelect(songId: number): void {
    this.router.navigate([`/browse/${songId}`]);
  }

}
