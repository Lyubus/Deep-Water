import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsListComponentComponent } from './skills-list-component.component';

describe('SkillsListComponentComponent', () => {
  let component: SkillsListComponentComponent;
  let fixture: ComponentFixture<SkillsListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
