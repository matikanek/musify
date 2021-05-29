import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { BrowseStore, BrowseState } from './browse.store';

@Injectable({ providedIn: 'root' })
export class BrowseQuery extends QueryEntity<BrowseState> {

  constructor(protected store: BrowseStore) {
    super(store);
  }
}