import { Component, OnInit } from '@angular/core';
import { ClientService } from '../Services/client.service';
import { Client } from '../Classes/client';
import {map} from 'rxjs/operators';

import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-inscri-client',
  templateUrl: './inscri-client.component.html',
  styleUrls: ['./inscri-client.component.css']
})
export class InscriClientComponent implements OnInit {

  constructor(private usersService: ClientService  ) {
    
  }
  submitted = false;
  editState = false;
  r: string;
  userToEdit: Client;
  users: Client[];
  user = {
    id_Client : 0,
    nom : '' ,
    prenom : '',
    dateN : null,
    image : null,
    password : '',
    mail:'',
    tel : 0,
    genre : ' '
   
  };

  onSubmit(f:NgForm) {
    this.user.genre=f.value['genre'];
  
    this.submitted = true;
    this.usersService.addUser(this.user);

  }
 
  ngOnInit() {
    this.getProdList();
  }
  getProdList() {
    this.usersService.getUsersList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({id: c.payload.doc.id, ...c.payload.doc.data()})
        )
      )
    ).subscribe(users => {
      this.users = users;
    });
  }
 

  

}
