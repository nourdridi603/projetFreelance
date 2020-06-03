import { Injectable } from '@angular/core';
import { Freelancer } from '../Classes/freelancer';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class FreelancerService {

  freelancers: Observable<Freelancer[]>;
  private dbPath = '/Freelancer';
  freelancer: Observable<Freelancer>;
 
  freelancerCollection: AngularFirestoreCollection<Freelancer> = null;

  constructor(public afs: AngularFirestore) { 
    this.freelancerCollection = afs.collection(this.dbPath);
  }
  
  getFreelancers() {
    return this.freelancers;
  }
  getFreelancersList(): AngularFirestoreCollection<Freelancer> {
    return this.freelancerCollection;
  }

  addUser(user: Freelancer) {
    this.freelancerCollection.add(user);
    console.log(user);
  }
  
}
