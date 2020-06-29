import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private API_TOKEN = 'BQCV9CFNHytBL3KsjnOQEKmG8HsXegZ0-YjvU9w42GQSrOXGFkWm8B9uMQ7se-L1jfeFcZR-uhwa8rAnevo';
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

  searchArtists(filter: string): Observable<any> {
    return this.getQuery(`search?query=${filter}&type=artist&offset=0&limit=20`)
      .pipe(map((data) => data["artists"].items));
  }

  findArtist(artistId: string) {
    return this.getQuery(`artists/${artistId}`);
  }

  getArtistTopTracks(artistId: string, country: string) {
    return this.getQuery(`artists/${artistId}/top-tracks?country=${country}`)
      .pipe(map((data) => data['tracks']));
  }
}
