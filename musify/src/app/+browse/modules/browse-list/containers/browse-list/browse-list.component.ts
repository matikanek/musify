import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/shared/models/song.model';

@Component({
  selector: 'app-browse-list',
  templateUrl: './browse-list.component.html',
  styleUrls: ['./browse-list.component.scss']
})
export class BrowseListComponent implements OnInit {
  songs: Song[] = [
    {
      id: 1,
      title: 'Beautiful journey',
      author: {
        name: 'Carl',
        lastName: 'Adams'
      },
      icon: 'icon',
      views: 256
    },
    {
      id: 2,
      title: 'Someone loves you honey',
      author: {
        name: 'June',
        lastName: 'Lodge'
      },
      icon: 'icon',
      views: 679
    },
    {
      id: 3,
      title: 'Time-Inception',
      author: {
        name: 'Hans',
        lastName: 'Zimmer'
      },
      icon: 'icon',
      views: 582
    },
    {
      id: 4,
      title: 'Redshire',
      author: {
        name: 'Andrius',
        lastName: 'Klimka'
      },
      icon: 'icon',
      views: 398
    },
    {
      id: 5,
      title: 'Love love love',
      author: {
        name: 'Juliana',
        lastName: 'Lovelas'
      },
      icon: 'icon',
      views: 872
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
