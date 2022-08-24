import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Movie } from '../interfaces/movie';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  getAllMovies() {
    return this.httpClient.get<Movie[]>('http://localhost:7210/movie/getmovies');
  }
  getMovieById(id: number) {
    return this.httpClient.get<Movie>('http://localhost:7210/movie/getmovie/' + id);
  }
  createMovie(movieObj: any) {
    this.httpClient.post("https://localhost:7210/movie/createmovie", movieObj);
  }
}
