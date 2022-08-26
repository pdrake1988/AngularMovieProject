import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { PurchasesComponent } from './purchases/purchases.component';

const routes: Routes = [
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  {
    path: 'movie-details/:movieId',
    canActivate: [AuthGuard],
    component: MovieDetailsComponent,
  },
  {
    path: 'purchases',
    canActivate: [AuthGuard],
    component: PurchasesComponent,
  },
  {
    path: 'favorties',
    canActivate: [AuthGuard],
    component: FavoritesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
