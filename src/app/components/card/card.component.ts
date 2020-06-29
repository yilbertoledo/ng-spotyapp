import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewArtist(card: any) {
    let artistId: string = (card.type === 'artist') ? card.id : card.artists[0].id;
    this.router.navigate(['/artist', artistId]);
  }

}
