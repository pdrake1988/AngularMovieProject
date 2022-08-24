import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { CookieService } from 'ngx-cookie-service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';
import { CreateMovieComponent } from './admin/create-movie/create-movie.component';
import { CreateCastComponent } from './admin/create-cast/create-cast.component';



@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    RegisterComponent,
    CreateMovieComponent,
    CreateCastComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule
  ],
  providers: [
    CookieService,
  ]
})
export class AdminModule { }
