import { Component, OnInit } from '@angular/core';
import { ClientService } from '../Services/client.service';
import { Client } from '../Classes/client';
import {map} from 'rxjs/operators';

import { NgForm } from '@angular/forms';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';



@Component({
  selector: 'app-inscri-client',
  templateUrl: './inscri-client.component.html',
  styleUrls: ['./inscri-client.component.css']
})
export class InscriClientComponent implements OnInit {
  userCollection: AngularFirestoreCollection<Client> = null;
  private dbPath = '/Client';
  constructor(private usersService: ClientService ,public afs: AngularFirestore) {
    this.userCollection = afs.collection(this.dbPath);
    
  }
  u:Client;
  exist=false;
  submitted = false;
  editState = false;
  userToEdit: Client;
  users: Client[];
  user = {
    id:'',
    nom : '' ,
    prenom : '',
    dateN : null,
    image : null,
    password : '',
    mail:'',
    tel : 0,
    genre : ' '
   
  };
TabId=[]
testId:string;
  onSubmit(f:NgForm) {
    this.exist=false;
    this.submitted = false;
     this.userCollection.snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({id: c.payload.doc.id, ...c.payload.doc.data()})
        )
      )
    ).subscribe(users => {
      this.users = users;
    });
   
   
    for( this.u of this.users)
        {if (this.u.mail == this.user.mail)
            {
              this.exist=true;
            }
          }
    if (this.exist==false) 
      {do {
        this.testId=String(Math.floor(Math.random() * Math.floor(99999999)));}
    while (this.TabId.indexOf(this.testId)>0)
    this.TabId.push(this.testId);
    this.user.id=this.testId;
//  console.log(this.userCollection.doc().get());
    this.usersService.addUser(this.user);
    console.log(this.user);
     this.submitted = true;}
        

   
   
  }
 
  ngOnInit() {
    this.getProdList();
  }



  getProdList() {
    this.usersService.getUsersList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({id: c.payload.doc.id,
             ...c.payload.doc.data()})
        )
      )
    ).subscribe(users => {
      this.users = users;
    });
  }
 

  

}
