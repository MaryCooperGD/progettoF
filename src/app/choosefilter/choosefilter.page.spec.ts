import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosefilterPage } from './choosefilter.page';

describe('ChoosefilterPage', () => {
  let component: ChoosefilterPage;
  let fixture: ComponentFixture<ChoosefilterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosefilterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosefilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
