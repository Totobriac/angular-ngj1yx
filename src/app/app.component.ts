import { Component, OnInit } from "@angular/core";
import { ChooseMovieService } from "./choose-movie.service";
import { FLOP_DATA } from "./FLOP_DATA";
import { PickMovieService } from "./pick-movie.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(
    public pickMovieService: PickMovieService,
    public chooseMovieService: ChooseMovieService
  ) {}

  flops = FLOP_DATA;
  isPlaying = true;
  isAWin = true;
  isALose = true;

  ngOnInit() {
    this.pickMovieService.draw(this.flops);
  }

  pickAMovie() {
    this.isAWin = true;
    this.isALose = true;
    this.isPlaying = true
    this.pickMovieService.draw(this.flops);
  }

  chooseAMovie(choice, movie1, movie2) {
    this.isPlaying = false
    this.chooseMovieService.choiceCheck(choice, movie1, movie2);
  }
}
