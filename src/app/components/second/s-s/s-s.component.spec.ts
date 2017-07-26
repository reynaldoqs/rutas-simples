import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SSComponent } from './s-s.component';

describe('SSComponent', () => {
  let component: SSComponent;
  let fixture: ComponentFixture<SSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
