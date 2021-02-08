import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { AuthGuard } from './auth.guard';
import { SignupComponent } from './signup/signup.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  {path:'home' ,canActivate:[AuthGuard] ,component:HomeComponent},
  {path:'' ,redirectTo:'home',canActivate:[AuthGuard],pathMatch:'full'},
  {path:'about' , canActivate:[AuthGuard],component:AboutComponent},
  {path:'movies' , canActivate:[AuthGuard],component:MoviesComponent},
  {path:'moviedetails/:id' ,component:MoviedetailsComponent},
  {path:'tv' , canActivate:[AuthGuard],component: TvComponent},
  {path:'login' , component:LoginComponent},
  {path:'signup' ,component:SignupComponent},
  {path:'**' , component:NotFoundPageComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
