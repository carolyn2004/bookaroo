import { Component, ViewChild } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-signup',
  standalone: false,
  
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private userService:UserService){

  }
  // Form handling
  handleSignUp(event: Event) {
    event.preventDefault();  // Prevent form submission default behavior (like page reload)

    // Access form fields using ViewChild or directly (here we're using ViewChild)
    const username = (<HTMLInputElement>document.getElementById("username")).value;
    const email = (<HTMLInputElement>document.getElementById("email")).value;
    const password = (<HTMLInputElement>document.getElementById("password")).value;

    // Debugging with alerts
    // alert("Username: " + username);
    // alert("Email: " + email);
    // alert("Password: " + password);

    
    this.userService.addUsers({
      username: username,
      email: email,
      password: password,
      book: []
    }).then((response) => {
      console.log('User added', response);
    }).catch((error) => {
      console.error('Error adding user:', error);
    });
  }
}



