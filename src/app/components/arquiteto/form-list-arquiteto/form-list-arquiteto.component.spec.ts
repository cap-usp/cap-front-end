import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormListArquitetoComponent } from './form-list-arquiteto.component';

describe('FormListArquitetoComponent', () => {
  let component: FormListArquitetoComponent;
  let fixture: ComponentFixture<FormListArquitetoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormListArquitetoComponent]
    });
    fixture = TestBed.createComponent(FormListArquitetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
