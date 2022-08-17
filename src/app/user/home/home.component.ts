import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Genre } from '../interfaces/genre';
import { Movie } from '../interfaces/movie';
import { GenreService } from '../services/genre.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];
  genres: Genre[] = [];
  genreId: number | null = null;
  movieSubscription: Subscription = new Subscription();
  genreSubscription: Subscription = new Subscription();
  constructor(private genreService: GenreService, private movieService: MovieService) { }
  ngOnInit(): void {
    this.movieSubscription = this.movieService.getAllMovies().subscribe(movieData => {
      this.movies = movieData;
    });
    this.genreSubscription = this.genreService.getAllGenres().subscribe(genres => {
      this.genres = [genres];
    });
  }
}
