import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemDePessoasComponent } from './listagem-de-pessoas.component';

describe('ListagemDePessoasComponent', () => {
  let component: ListagemDePessoasComponent;
  let fixture: ComponentFixture<ListagemDePessoasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListagemDePessoasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemDePessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
