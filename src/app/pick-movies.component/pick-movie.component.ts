import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PickMovieService {
  movie1 = 0;
  movie2 = 0;  

  draw(moviesList) {    
    this.movie1 = moviesList[Math.floor(Math.random() * moviesList.length)];
    this.movie2 = moviesList[Math.floor(Math.random() * moviesList.length)];
    if (this.movie1 === this.movie2) {
      this.movie2 = moviesList[Math.floor(Math.random() * moviesList.length)];
    } else {
      return this.movie1, this.movie2;
    }
  }  
}
