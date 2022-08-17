import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    FavoritesComponent,
    PurchasesComponent,
    MovieCardComponent,
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
