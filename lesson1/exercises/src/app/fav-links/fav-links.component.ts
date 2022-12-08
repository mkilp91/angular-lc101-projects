import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks: string[] = ["https://www.warnerbros.com/movies/mad-max-fury-road", "https://www.flightclub.com/"];
  constructor() { }

  ngOnInit() {
  }

}
