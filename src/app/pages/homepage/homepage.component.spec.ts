import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HommepageComponent } from './hommepage.component';

describe('HommepageComponent', () => {
  let component: HommepageComponent;
  let fixture: ComponentFixture<HommepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HommepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HommepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
