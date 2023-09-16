import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssureProfileComponent } from './assure-profile.component';

describe('AssureProfileComponent', () => {
  let component: AssureProfileComponent;
  let fixture: ComponentFixture<AssureProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssureProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssureProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
