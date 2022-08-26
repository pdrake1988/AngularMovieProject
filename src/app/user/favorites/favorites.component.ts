import { Component, OnInit } from '@angular/core';
import { Favorite } from '../interfaces/favorite';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  movies: Favorite[] = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {}
  getFavorites() {
    this.userService.getFavoritedMovies().subscribe((data) => {
      this.movies = [data];
    });
  }
}
