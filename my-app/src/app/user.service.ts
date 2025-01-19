import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: any
  constructor(private firestore: AngularFirestore) {
    this.getUsers().subscribe((data) => {
    this.users=data
    console.log("skyler")
    console.log(this.users)
    })

  }

  // Get all users from Firestore
  getUsers(): Observable<any[]> {
    return this.firestore.collection('users').valueChanges();
    
  }
  addUsers( data: any) {
    return this.firestore.collection('users').add(data);
  }



}
