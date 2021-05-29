import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Song } from 'src/app/shared/models/song.model';

export interface BrowseState extends EntityState<Song, number> {
  song?: Song;
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'browse' })
export class BrowseStore extends EntityStore<BrowseState> {

  constructor() {
    super();
  }
}