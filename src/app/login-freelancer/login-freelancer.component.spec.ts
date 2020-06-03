import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFreelancerComponent } from './login-freelancer.component';

describe('LoginFreelancerComponent', () => {
  let component: LoginFreelancerComponent;
  let fixture: ComponentFixture<LoginFreelancerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFreelancerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
