import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortsRecordComponent } from './ports-record.component';

describe('PortsRecordComponent', () => {
  let component: PortsRecordComponent;
  let fixture: ComponentFixture<PortsRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortsRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortsRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
