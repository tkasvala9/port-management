import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponantComponent } from './login-componant.component';

describe('LoginComponantComponent', () => {
  let component: LoginComponantComponent;
  let fixture: ComponentFixture<LoginComponantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
