import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { Song } from 'src/app/shared/models/song.model';
import { songs } from './browse.mocks';
import { Params } from '@angular/router';
import { searchArray, sortArray } from 'src/app/shared/utils/array.utils';
import { SortProperty } from '../modules/browse-list/shared/browse-list.model';

@Injectable({ providedIn: 'root' })
export class BrowseRepository {

  constructor(private http: HttpClient) {}

  getSongs(queryParams: Params = {}): Observable<Song[]> {
    let filteredSongs = searchArray<Song>([...songs], queryParams.search);

    if (queryParams.sortProperty === SortProperty.alphabet) {
      filteredSongs = sortArray([...filteredSongs], queryParams.sortOrder, 'title');
    }

    if (queryParams.sortProperty === SortProperty.numerative) {
      filteredSongs = sortArray([...filteredSongs], queryParams.sortOrder, 'id');
    }
    return of(filteredSongs);
    //return this.http.get<Song[]>('Moje API');
  }

  getSong(id: number): Observable<Song> {
    return of(songs.find(song => song.id === id) as Song);
  }
}