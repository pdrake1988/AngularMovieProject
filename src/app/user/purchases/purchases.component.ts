import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Purchase } from '../interfaces/purchase';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css'],
})
export class PurchasesComponent implements OnInit {
  movies: Purchase[] = [];
  movieSubscription: Subscription = new Subscription;
  constructor(private userService: UserService) {}

  ngOnInit(): void {}
  getPurchases() {
    this.movieSubscription = this.userService.getPurchasedMovies().subscribe((data) => {
      this.movies = [data];
    });
  }
}
