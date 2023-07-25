import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarNoticiaComponent } from './listar-noticia.component';

describe('ListarNoticiaComponent', () => {
  let component: ListarNoticiaComponent;
  let fixture: ComponentFixture<ListarNoticiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarNoticiaComponent]
    });
    fixture = TestBed.createComponent(ListarNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
