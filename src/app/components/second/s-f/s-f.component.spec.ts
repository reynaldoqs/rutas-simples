import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SFComponent } from './s-f.component';

describe('SFComponent', () => {
  let component: SFComponent;
  let fixture: ComponentFixture<SFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
