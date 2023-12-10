import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsArquitetoComponent } from './forms-arquiteto.component';

describe('FormsArquitetoComponent', () => {
  let component: FormsArquitetoComponent;
  let fixture: ComponentFixture<FormsArquitetoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsArquitetoComponent]
    });
    fixture = TestBed.createComponent(FormsArquitetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
