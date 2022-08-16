import { Component, OnInit } from '@angular/core';
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
  constructor(private genreService: GenreService, private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe(movieData => {
      this.movies = [movieData];
    });
    this.genreService.getAllGenres().subscribe(genres => {
      this.genres = [genres];
    });
  }
}
