import { Component, OnInit } from '@angular/core';
import { FreelancerService } from '../Services/freelancer.service';
import { Freelancer } from '../Classes/freelancer';
import { NgForm } from '@angular/forms';
import {map} from 'rxjs/operators';

import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-inscri-freelancer',
  templateUrl: './inscri-freelancer.component.html',
  styleUrls: ['./inscri-freelancer.component.css']
})
export class InscriFreelancerComponent implements OnInit {
  private dbPath = '/Freelancer';
  freeCollection: AngularFirestoreCollection<Freelancer> = null;
  constructor(private usersService: FreelancerService ,public afs: AngularFirestore) {
    this.freeCollection = afs.collection(this.dbPath);
  }
  u:Freelancer;
  exist=false;
  submitted = false;
  editState = false;
  r: string;
  userToEdit: Freelancer;
  freelancers: Freelancer[];
  freelancer = {
    id : '',
    image : null,
    nom : '',
    prenom : '',
    dateN : null,
    specialite : ' ',
    password : '',
    genre:  ' ',
    mail: '',
    tel : 0,
    CV : null
   
  };

  TabId=[]
testId:string;
  onSubmit(f:NgForm) {
    this.exist=false;
    this.submitted = false;
    

    this.freeCollection.snapshotChanges().pipe(
     map(changes =>
       changes.map(c =>
         ({id: c.payload.doc.id, ...c.payload.doc.data()})
       )
     )
   ).subscribe(freelancers => {
     this.freelancers = freelancers;
   });
  
  
   for( this.u of this.freelancers)
       {if (this.u.mail == this.freelancer.mail)
           {
             this.exist=true;
           }
         }
   if (this.exist==false) 
     { do {
           this.testId=String(Math.floor(Math.random() * Math.floor(99999999)));}
       while (this.TabId.indexOf(this.testId)>0)
       this.TabId.push(this.testId);
       this.freelancer.id=this.testId;
       this.usersService.addUser(this.freelancer);
       console.log(this.freelancer);
        this.submitted = true;}
       
 
  
  
 }
 
  ngOnInit() {
    this.getFreelancerList();
  }
  getFreelancerList() {
    this.usersService.getFreelancersList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({id: c.payload.doc.id, ...c.payload.doc.data()})
        )
      )
    ).subscribe(freelancers => {
      this.freelancers = freelancers;
    });
  }
  

}
