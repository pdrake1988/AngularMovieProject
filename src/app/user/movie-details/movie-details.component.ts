import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Genre } from '../interfaces/genre';
import { Movie } from '../interfaces/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movieData!: Movie;
  genreId = '';
  movieSubscription: Subscription = new Subscription;
  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.genreId = params.get('id') ?? '0';
      this.movieSubscription = this.movieService.getMovieById(+this.genreId).subscribe(movieDate => {
        this.movieData = movieDate;
      });
    });
  }

}
