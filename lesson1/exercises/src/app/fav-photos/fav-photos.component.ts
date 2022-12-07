import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Movie Posters';
  image1 = 'https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg';
  image2 = 'https://upload.wikimedia.org/wikipedia/en/6/6e/Mad_Max_Fury_Road.jpg';
  image3 = 'https://upload.wikimedia.org/wikipedia/en/d/dd/OceansEightPoster.jpeg';

  constructor() { }

  ngOnInit() {
  }

}