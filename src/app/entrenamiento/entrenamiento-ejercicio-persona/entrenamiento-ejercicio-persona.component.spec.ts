/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EntrenamientoEjercicioPersonaComponent } from './entrenamiento-ejercicio-persona.component';

describe('EntrenamientoPersonaListaComponent', () => {
  let component: EntrenamientoEjercicioPersonaComponent;
  let fixture: ComponentFixture<EntrenamientoEjercicioPersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrenamientoEjercicioPersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrenamientoEjercicioPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
