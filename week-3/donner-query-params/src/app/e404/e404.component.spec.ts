/*============================================
; Title: e404.component.specs.ts
; Author: Adam Donner
; Date: 25 September 2019
; Description:  e404.component.specs.ts
;===========================================
*/


// start program

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E404Component } from './e404.component';

describe('E404Component', () => {
  let component: E404Component;
  let fixture: ComponentFixture<E404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
// end program