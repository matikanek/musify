import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { Song } from 'src/app/shared/models/song.model';
import { songs } from './browse.mocks';

@Injectable({ providedIn: 'root' })
export class BrowseRepository {

  constructor(private http: HttpClient) {}

  getSongs(): Observable<Song[]> {
    return of(songs);
    //return this.http.get<Song[]>('Moje API');
  }
}