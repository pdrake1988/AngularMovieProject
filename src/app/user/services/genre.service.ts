import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Genre } from '../interfaces/genre';
@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private httpClient: HttpClient) { }

  getAllGenres() {
    return this.httpClient.get<Genre>('https://localhost:7210/api/genre/getallgenres');
  }

}
