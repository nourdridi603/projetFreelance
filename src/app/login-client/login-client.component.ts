import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../Classes/client';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-client',
  templateUrl: './login-client.component.html',
  styleUrls: ['./login-client.component.css']
})
export class LoginClientComponent implements OnInit {
  users: Observable<Client[]>;
  private dbPath = '/Client';
  user: Observable<Client>;
  userDoc: AngularFirestoreDocument<Client>;
  userCollection: AngularFirestoreCollection<Client> = null;
  liste = this.users ;
  test:boolean;
  use :  any ;
  
  constructor(public afs: AngularFirestore) { 
    this.userCollection = afs.collection(this.dbPath);
  }
  ngOnInit(): void {
    
  }
  
     
  
}
