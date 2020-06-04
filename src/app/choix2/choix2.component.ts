import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choix2',
  templateUrl: './choix2.component.html',
  styleUrls: ['./choix2.component.css']
})
export class Choix2Component implements OnInit {

  constructor(private router:Router) { }
choix='';
  ngOnInit(): void {
  }
  

  onSubmit(f:NgForm)
  {
    if(f.value['choix']=="client")
      { 
      this.router.navigate(['/LoginClient']);
    }
    else 
       {
        this.router.navigate(['/LoginFreelancer']);
      }
  }
}
