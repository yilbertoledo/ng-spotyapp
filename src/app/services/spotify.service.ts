import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { MapOperator } from 'rxjs/internal/operators/map';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private API_TOKEN = 'BQAAec2MOircOSWoY-KiyYtepw05tosJD4AtHSy3H40NJSVzazUktgpoSjxOyJg4JZFCYkF3RW99RXFqJls';
  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${this.API_TOKEN}`,
    });
    return this.http.get(`https://api.spotify.com/v1/${query}`, { headers })
  }

  getNewReleases(): Observable<any> {
    return this.getQuery("browse/new-releases")
      .pipe(map((data) => data["albums"].items));
  }

  searchArtist(filter: string): Observable<any> {
    return this.getQuery(`search?query=${filter}&type=artist&offset=0&limit=20`)
      .pipe(map((data) => data["artists"].items));
  }
}
