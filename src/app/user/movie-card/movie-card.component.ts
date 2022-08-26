import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {
  movie!: Movie;
  @Input() movieId = 0;
  constructor(private movieService: MovieService) {}
  ngOnInit(): void {}

  getMovies() {
    this.movieService.getMovieById(this.movieId).subscribe((data) => {
      this.movie = { ...data };
    });
  }
}
