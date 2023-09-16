import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssureurProfileComponent } from './assureur-profile.component';

describe('AssureurProfileComponent', () => {
  let component: AssureurProfileComponent;
  let fixture: ComponentFixture<AssureurProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssureurProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssureurProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
