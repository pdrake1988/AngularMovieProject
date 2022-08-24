import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Favorite } from '../interfaces/favorite';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getFavoritedMovies() {
    return this.httpClient.get<Favorite>('https://localhost:7210/api/favorite/getallfavorites');
  }
  getPurchasedMovies() {
    return this.httpClient.get<Favorite>('https://localhost:7210/api/purchase/getallpurchases');
  }
}
