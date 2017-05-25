import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Md5Component } from './md5.component';

describe('Md5Component', () => {
  let component: Md5Component;
  let fixture: ComponentFixture<Md5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Md5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Md5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
