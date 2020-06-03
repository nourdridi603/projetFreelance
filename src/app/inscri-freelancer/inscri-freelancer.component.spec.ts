import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriFreelancerComponent } from './inscri-freelancer.component';

describe('InscriFreelancerComponent', () => {
  let component: InscriFreelancerComponent;
  let fixture: ComponentFixture<InscriFreelancerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriFreelancerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
