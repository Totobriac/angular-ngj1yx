import { Injectable, Output, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ChooseMovieService {
  isAWin = true;
  isALose = true;

  @Output() setButton = new EventEmitter () 

  choiceCheck(choice, movie1, movie2) {
    console.log(movie1.stars, movie2.stars);
    if (movie1.stars < movie2.stars && choice == 1) {
      this.setButton.emit()
    } else if (movie2.stars < movie1.stars && choice == 2) {
      this.isAWin = false;
    } else {
      this.isALose = false;
    }
  }
}
