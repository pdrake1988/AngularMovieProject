import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  getAllMovies() {
    return this.httpClient.get('http://localhost:7210/movies/GetAllMovies');
  }
  getMovieById(id: number) {
    return this.httpClient.get('http://localhost:7210/movies/GetMovieById/' + id);
  }
}
