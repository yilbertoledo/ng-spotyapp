import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  loading: boolean = false;
  artist: any;
  COUNTRY = 'CL';
  topTracks: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private spotifySvc: SpotifyService) {
    this.loading = true;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.getArtist(param['id']);
    })
  }

  getArtist(artistId: string) {
    //TODO: validate param
    this.spotifySvc.findArtist(artistId).subscribe((artist) => {
      //console.log(artist);
      this.artist = artist;
      this.loading = false;
      this.getArtistTopTracks(artistId);
    });
  }

  getArtistTopTracks(artistId: string) {
    this.spotifySvc.getArtistTopTracks(artistId, this.COUNTRY).subscribe((tracks) => {
      console.log(tracks);
      this.topTracks = tracks;
    });
  }


}
