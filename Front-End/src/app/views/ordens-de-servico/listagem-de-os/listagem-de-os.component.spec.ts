import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemDeOsComponent } from './listagem-de-os.component';

describe('ListagemDeOsComponent', () => {
  let component: ListagemDeOsComponent;
  let fixture: ComponentFixture<ListagemDeOsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListagemDeOsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemDeOsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
