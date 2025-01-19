import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { AngularFireModule } from '@angular/fire/compat'; // Firebase Module
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; // Firestore Module

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    UserComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBtWKsDnR41L4GA8BKuMNiv_bGicgAMA5E",
      authDomain: "bookaroo-6515d.firebaseapp.com",
      projectId: "bookaroo-6515d",
      storageBucket: "bookaroo-6515d.firebasestorage.app",
      messagingSenderId: "634462287455",
      appId: "1:634462287455:web:bfa0a6e5730dcc4d070dea"
    }), // Initialize Firebase
    AngularFirestoreModule, // Import Firestore Module to interact with Firestore
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
