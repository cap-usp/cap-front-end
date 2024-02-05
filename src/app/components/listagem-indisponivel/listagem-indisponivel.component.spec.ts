import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemIndisponivelComponent } from './listagem-indisponivel.component';

describe('ListagemIndisponivelComponent', () => {
  let component: ListagemIndisponivelComponent;
  let fixture: ComponentFixture<ListagemIndisponivelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagemIndisponivelComponent]
    });
    fixture = TestBed.createComponent(ListagemIndisponivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
