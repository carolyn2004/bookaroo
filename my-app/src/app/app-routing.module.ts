import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  // {path: '', component: UserComponent}, 
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect empty path to '/home' 
  {path: 'home', component: HomeComponent }, 
  {path: 'login', component: LoginComponent}, 
  {path: 'signup', component: SignupComponent},
  {path: 'user', component: UserComponent},
  {path: 'book-details', component: BookDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
