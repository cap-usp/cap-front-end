import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPesquisadorComponent } from './pagina-pesquisador.component';

describe('PaginaPesquisadorComponent', () => {
  let component: PaginaPesquisadorComponent;
  let fixture: ComponentFixture<PaginaPesquisadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaPesquisadorComponent]
    });
    fixture = TestBed.createComponent(PaginaPesquisadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
