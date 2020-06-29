import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  loading = false;
  artists: any[] = [];
  constructor(private spotifySvc: SpotifyService) {

  }

  ngOnInit(): void {
  }

  searchArtist(filter: string) {
    this.loading = true;
    if (filter.trim().length > 0) {
      this.spotifySvc.searchArtists(filter).subscribe((artists: any) => {
        this.artists = artists;
        this.loading = false;
      });
    }
    else {
      this.artists = [];
      this.loading = false;
    }

  }

}
