import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TSComponent } from './t-s.component';

describe('TSComponent', () => {
  let component: TSComponent;
  let fixture: ComponentFixture<TSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
