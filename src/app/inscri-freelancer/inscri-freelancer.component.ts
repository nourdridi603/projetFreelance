import { Component, OnInit } from '@angular/core';
import { FreelancerService } from '../Services/freelancer.service';
import { Freelancer } from '../Classes/freelancer';
import { NgForm } from '@angular/forms';
import {map} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inscri-freelancer',
  templateUrl: './inscri-freelancer.component.html',
  styleUrls: ['./inscri-freelancer.component.css']
})
export class InscriFreelancerComponent implements OnInit {

  constructor(private usersService: FreelancerService , private toastr : ToastrService) {}
  submitted = false;
  editState = false;
  r: string;
  userToEdit: Freelancer;
  freelancers: Freelancer[];
  freelancer = {
    id_Freelancer : 0,
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
  onSubmit(f:NgForm) {
  
    
    this.submitted = true;
    this.usersService.addUser(this.freelancer);
   
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
