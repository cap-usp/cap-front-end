import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsConstrutoraComponent } from './forms-construtora.component';

describe('FormsConstrutoraComponent', () => {
  let component: FormsConstrutoraComponent;
  let fixture: ComponentFixture<FormsConstrutoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsConstrutoraComponent]
    });
    fixture = TestBed.createComponent(FormsConstrutoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
