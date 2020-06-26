import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artists: any[] = [];
  constructor(private spotifySvc: SpotifyService) {

  }

  ngOnInit(): void {
  }

  searchArtist(filter: string) {
    console.log(filter);
    this.spotifySvc.searchArtist(filter).subscribe((artists: any) => {
      this.artists = artists;
    });
  }

}
