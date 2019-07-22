import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonsCountComponentComponent } from './persons-count-component.component';

describe('PersonsCountComponentComponent', () => {
  let component: PersonsCountComponentComponent;
  let fixture: ComponentFixture<PersonsCountComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonsCountComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonsCountComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
