import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

   constructor() { }

   ngOnInit() {
   }
   addMovie (newTitle: string){
      let errorMsg = '';
      if(this.movies.includes(newTitle)){
         errorMsg = `${newTitle} is already on your watchlist!`
      } else if (newTitle === "" || newTitle === " "){
         errorMsg = "Please enter a valid movie title!"
      } else {
         this.movies.push(newTitle);
      }
      return errorMsg;
   }

}