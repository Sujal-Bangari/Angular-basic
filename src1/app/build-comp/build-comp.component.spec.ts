import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildCompComponent } from './build-comp.component';

describe('BuildCompComponent', () => {
  let component: BuildCompComponent;
  let fixture: ComponentFixture<BuildCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
