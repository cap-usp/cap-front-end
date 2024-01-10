import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormListUsuarioComponent } from './form-list-usuario.component';

describe('FormListUsuarioComponent', () => {
  let component: FormListUsuarioComponent;
  let fixture: ComponentFixture<FormListUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormListUsuarioComponent]
    });
    fixture = TestBed.createComponent(FormListUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
