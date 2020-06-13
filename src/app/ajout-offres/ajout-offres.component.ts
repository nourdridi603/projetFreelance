import { Component, OnInit } from '@angular/core';
import { OffreServiceService } from '../offre-service.service';
import { Offre } from '../Classes/offre';

@Component({
  selector: 'app-ajout-offres',
  templateUrl: './ajout-offres.component.html',
  styleUrls: ['./ajout-offres.component.css']
})
export class AjoutOffresComponent implements OnInit {

  constructor(private offresservice : OffreServiceService) {}
  submitted = false;
  editState = false;
  mode = "fixe";
  r: string;
  OffreToEdit: Offre;
  offres: Offre[];
  offre = {
    id_offre :'',
    nom : '',
    categorie : '',
    description : '',
    budget : 0,
    mode_payement : "fixe",
    currency : ''
    };
  onSubmit() {
    this.submitted = true;
    this.offresservice.addUser(this.offre);
  }


  deleteUser(event, offre: Offre) {
    console.log(offre);
    this.offresservice.deleteUser(offre);
  }

  fixe(){
    this.mode="fixe";
    console.log(this.mode);

  }
  heure(){
    this.mode="heure";
    console.log(this.mode);
  }
  
  ngOnInit() {
    console.log(this.mode);
  }

}
