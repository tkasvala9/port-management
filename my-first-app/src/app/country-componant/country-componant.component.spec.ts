import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryComponantComponent } from './country-componant.component';

describe('CountryComponantComponent', () => {
  let component: CountryComponantComponent;
  let fixture: ComponentFixture<CountryComponantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryComponantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryComponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
