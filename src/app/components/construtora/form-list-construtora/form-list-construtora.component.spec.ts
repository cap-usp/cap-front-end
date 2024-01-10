import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormListConstrutoraComponent } from './form-list-construtora.component';

describe('FormListConstrutoraComponent', () => {
  let component: FormListConstrutoraComponent;
  let fixture: ComponentFixture<FormListConstrutoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormListConstrutoraComponent]
    });
    fixture = TestBed.createComponent(FormListConstrutoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
