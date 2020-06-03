import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-choix',
  templateUrl: './choix.component.html',
  styleUrls: ['./choix.component.css']
})
export class ChoixComponent implements OnInit {
choix : '';
  constructor(private router:Router
    ) { }
  onSubmit(f:NgForm)
  {
    if(f.value['choix']=="client")
      { 
      this.router.navigate(['/inscriClient']);
    }
    else 
       {
        this.router.navigate(['/inscriFreelancer']);
      }
  }
  ngOnInit(): void {
  }

}
