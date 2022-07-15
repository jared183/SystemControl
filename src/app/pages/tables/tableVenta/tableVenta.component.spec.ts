/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TableVentaComponent } from './tableVenta.component';

describe('TableVentaComponent', () => {
  let component: TableVentaComponent;
  let fixture: ComponentFixture<TableVentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableVentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
