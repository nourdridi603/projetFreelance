import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Freelancer } from '../Classes/freelancer';
import { map } from 'rxjs/operators';
import { FreelancerService } from '../Services/freelancer.service';

@Component({
  selector: 'app-login-freelancer',
  templateUrl: './login-freelancer.component.html',
  styleUrls: ['./login-freelancer.component.css']
})
export class LoginFreelancerComponent implements OnInit {
  private dbPath = '/Freelancer';
  freelancerDoc: AngularFirestoreDocument<Freelancer>;
  freelancerCollection: AngularFirestoreCollection<Freelancer> = null;
  freelancers: Freelancer[];
  u:Freelancer;
  test:boolean;
  Email:String;
  pwd:String;  
  constructor(public afs: AngularFirestore,private usersService:  FreelancerService) { 
    this.freelancerCollection = afs.collection(this.dbPath);
  }
  
 
  
  ngOnInit() {
    this.getProdList();
  }



  getProdList() {
    this.usersService.getFreelancersList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({id: c.payload.doc.id,
             ...c.payload.doc.data()})
        )
      )
    ).subscribe(freelancers => {
      this.freelancers = freelancers;
    });
  }






  onSubmit(f:NgForm)
      {this.test=false;
        this.freelancerCollection.snapshotChanges().pipe(
        map(changes =>
          changes.map(c =>
            ({id: c.payload.doc.id, ...c.payload.doc.data()})
          )
        )
      ).subscribe(freelancers => {
        this.freelancers = freelancers;
      });


      for( this.u of this.freelancers)
          {if ((this.u.mail == f.value['Email']) && (this.u.password == f.value['pwd']))
              {
                this.test=true;
                console.log(this.u.mail);
              }
            }

           
          }}
