import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { MovieCardComponent } from './movie-card/movie-card.component';



@NgModule({
  declarations: [
    HomeComponent,
    FavoritesComponent,
    PurchasesComponent,
    MovieCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
