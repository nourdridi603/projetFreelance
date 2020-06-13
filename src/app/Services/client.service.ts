import { Injectable } from '@angular/core';
import { Client } from '../Classes/client';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  users: Observable<Client[]>;
  private dbPath = '/Client';
  user: Observable<Client>;
  userDoc: AngularFirestoreDocument<Client>;
  userCollection: AngularFirestoreCollection<Client> = null;
  liste = [];
  use: any ;
  test:boolean;
  constructor(public afs: AngularFirestore) { 
    this.userCollection = afs.collection(this.dbPath);
  }
  
  getUsers() {
    return this.users;
  }
  getUsersList(): AngularFirestoreCollection<Client> {
    return this.userCollection;
  }

  addUser(user: Client) {
   
        this.userCollection.add(user);
        
        console.log(user);
      

   
  }
 
}
