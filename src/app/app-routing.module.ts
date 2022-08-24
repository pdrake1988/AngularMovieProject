import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';

const routes: Routes = [
  {path: 'movies', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  {path: '', component: AdminComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
