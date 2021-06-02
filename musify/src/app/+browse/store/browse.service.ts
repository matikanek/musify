import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { BrowseRepository } from './browse.repository';
import { BrowseStore } from './browse.store';

@Injectable({ providedIn: 'root' })
export class BrowseService {

  constructor(
    private browseRepository: BrowseRepository,
    private browseStore: BrowseStore
  ) {}

  getSongs(queryParams: Params = {}): void {
    this.browseRepository
      .getSongs(queryParams)
      .subscribe((songs) => { 
        this.browseStore.set(songs);      
      });
  }

  getSong(id: number): void {
    this.browseRepository
      .getSong(id)
      .subscribe((song) => {
        this.browseStore.update({ song })
      });
  }
}