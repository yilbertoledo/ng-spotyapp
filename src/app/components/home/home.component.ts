import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newReleases: any[] = [];
  constructor(private spotifySvc: SpotifyService) {
  }

  ngOnInit(): void {
    this.spotifySvc.getNewReleases().subscribe((albums) => {
      console.log(albums);
      this.newReleases = albums;
    });
  }

}
