import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { Song } from 'src/app/shared/models/song.model';
import { songs } from './browse.mocks';
import { Params } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class BrowseRepository {

  constructor(private http: HttpClient) {}

  getSongs(queryParams: Params = {}): Observable<Song[]> {
    if(queryParams.search) {
      const regex = new RegExp(queryParams.search, 'i');
      return of(songs.filter((song) => {
        return song.title.match(regex);
      }));
    } else {
      return of(songs);
    }
    //return this.http.get<Song[]>('Moje API');
  }

  getSong(id: number): Observable<Song> {
    return of(songs.find(song => song.id === id) as Song);
  }
}