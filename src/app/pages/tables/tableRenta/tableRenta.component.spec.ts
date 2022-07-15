/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TableRentaComponent } from './tableRenta.component';

describe('TableRentaComponent', () => {
  let component: TableRentaComponent;
  let fixture: ComponentFixture<TableRentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableRentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
