import { Component, OnInit } from '@angular/core';

import { Client } from '../Classes/client';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { ClientService } from '../Services/client.service';

@Component({
  selector: 'app-login-client',
  templateUrl: './login-client.component.html',
  styleUrls: ['./login-client.component.css']
})
export class LoginClientComponent implements OnInit {

  private dbPath = '/Client';
  userDoc: AngularFirestoreDocument<Client>;
  userCollection: AngularFirestoreCollection<Client> = null;
  users: Client[];
  u:Client;
  test:boolean;
  Email:String;
  pwd:String;
  constructor(public afs: AngularFirestore,private usersService: ClientService ) { 
    this.userCollection = afs.collection(this.dbPath);
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


  onSubmit(f:NgForm)
    {this.test=false;
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
        {if ((this.u.mail == f.value['Email']) && (this.u.password == f.value['pwd']))
            {
              this.test=true;
              console.log(this.u.mail);
             
            }
          }
    
        
    }


}
