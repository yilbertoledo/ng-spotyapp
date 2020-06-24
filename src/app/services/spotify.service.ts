import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      "Authorization": "Bearer BQAZwOJ33leOkhVMtDLVtGppkC-UL8jJnzvvAeKVwBlQaNKF2K-H-b3nUW7qoft4nOx1zzP3GoBcgDlv_fY"
    });

    this.http.get("https://api.spotify.com/v1/browse/new-releases", { headers })
      .subscribe((resp) => { console.log(resp); });
  }
}
