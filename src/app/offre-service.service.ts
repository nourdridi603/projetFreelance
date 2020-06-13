import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Offre} from "src/app/Classes/offre";
@Injectable({
  providedIn: 'root'
})
export class OffreServiceService {

  offres: Observable<Offre[]>;
  private dbPath = '/Offres';
  offre: Observable<Offre>;
  OffreDoc: AngularFirestoreDocument<Offre>;
  OffreCollection: AngularFirestoreCollection<Offre> = null;

  constructor(public afs: AngularFirestore) {
    this.OffreCollection = afs.collection(this.dbPath);
  }

  addUser(offre: Offre) {
    this.OffreCollection.add(offre);
    console.log(offre);
  }

  getOffres() {
    return this.offres;
  }
  getUsersList(): AngularFirestoreCollection<Offre> {
    return this.OffreCollection;
  }

  

  updateUser(offre: Offre) {
    this.OffreDoc = this.afs.doc(`Offres/${offre.id_offre}`);
    this.OffreDoc.update(offre);
  }
  
  deleteUser(offre: Offre) {
    this.OffreDoc = this.afs.doc(`Offres/${offre.id_offre}`);
    console.log(this.OffreDoc);
    this.OffreDoc.delete();
  }
 }
