import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  standalone: false,
  
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  users: any[] = []; // Store users fetched from Firestore

  constructor(private userService: UserService) {
    
  }

  ngOnInit(): void {
    // Fetch users from Firestore when the component is initialized
    this.users = this.userService.users
    console.log("carolyn")
    console.log(this.users)

  }
}
