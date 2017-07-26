import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TFComponent } from './t-f.component';

describe('TFComponent', () => {
  let component: TFComponent;
  let fixture: ComponentFixture<TFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
