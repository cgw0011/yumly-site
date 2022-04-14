import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TagsBarComponent } from './tagsbar.component';

describe('TagsBarComponent', () => {
  let component: TagsBarComponent;
  let fixture: ComponentFixture<TagsBarComponent>;
  let heroDe: DebugElement;
  let heroEl: HTMLElement;
  let expectedTitle: string = "Next";

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({declarations: [TagsBarComponent]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsBarComponent);
    component = fixture.componentInstance;

    heroDe = fixture.debugElement.query(By.css('.tag'));
    heroEl = heroDe.nativeElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should have title', () => {
    expect(heroEl.textContent).toContain(expectedTitle);
  });
});