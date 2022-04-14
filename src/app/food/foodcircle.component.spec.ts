import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FoodCircleComponent } from './foodcircle.component';

describe('FoodCircleComponent', () => {
  let component: FoodCircleComponent;
  let fixture: ComponentFixture<FoodCircleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({declarations: [FoodCircleComponent]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

});