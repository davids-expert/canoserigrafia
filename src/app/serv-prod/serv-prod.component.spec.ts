import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServProdComponent } from './serv-prod.component';

describe('ServProdComponent', () => {
  let component: ServProdComponent;
  let fixture: ComponentFixture<ServProdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServProdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
