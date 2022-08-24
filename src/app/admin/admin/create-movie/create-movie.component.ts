import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/user/services/movie.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {
  movieInfo = {
    title: '',
    overview: '',
    tagLine: '',
    budget: 0,
    revenue: 0,
    imdbUrl: '',
    posterUrl: '',
    originalLanguage: '',
    runtime: 0,
    price: 0
  }
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }
  createMovie() {
    this.movieService.createMovie(this.movieInfo);
  }
}
