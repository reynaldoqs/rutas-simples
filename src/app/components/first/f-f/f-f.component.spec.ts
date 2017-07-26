import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FFComponent } from './f-f.component';

describe('FFComponent', () => {
  let component: FFComponent;
  let fixture: ComponentFixture<FFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
