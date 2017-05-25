import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sha1Component } from './sha1.component';

describe('Sha1Component', () => {
  let component: Sha1Component;
  let fixture: ComponentFixture<Sha1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sha1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sha1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
