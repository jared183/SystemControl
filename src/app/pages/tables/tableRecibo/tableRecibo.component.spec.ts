/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TableReciboComponent } from './tableRecibo.component';

describe('TableReciboComponent', () => {
  let component: TableReciboComponent;
  let fixture: ComponentFixture<TableReciboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableReciboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableReciboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
