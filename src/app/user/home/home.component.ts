import { Component, OnInit } from '@angular/core';
import { Genre } from '../interfaces/genre';
import { GenreService } from '../services/genre.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  genres: Genre[] = [];
  constructor(private genreService: GenreService) { }

  ngOnInit(): void {
    this.genreService.getAllGenres().subscribe(genres => {
      this.genres = [genres];
    });
  }
}
