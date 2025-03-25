import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLagComponent } from './form-lag.component';

describe('FormLagComponent', () => {
  let component: FormLagComponent;
  let fixture: ComponentFixture<FormLagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
