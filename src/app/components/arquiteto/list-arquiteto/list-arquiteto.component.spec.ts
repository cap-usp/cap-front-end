import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArquitetoComponent } from './list-arquiteto.component';

describe('ListArquitetoComponent', () => {
  let component: ListArquitetoComponent;
  let fixture: ComponentFixture<ListArquitetoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListArquitetoComponent]
    });
    fixture = TestBed.createComponent(ListArquitetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
