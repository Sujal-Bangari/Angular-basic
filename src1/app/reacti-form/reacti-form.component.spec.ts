import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiFormComponent } from './reacti-form.component';

describe('ReactiFormComponent', () => {
  let component: ReactiFormComponent;
  let fixture: ComponentFixture<ReactiFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
