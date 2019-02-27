import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomlyPage } from './randomly.page';

describe('RandomlyPage', () => {
  let component: RandomlyPage;
  let fixture: ComponentFixture<RandomlyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomlyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomlyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
