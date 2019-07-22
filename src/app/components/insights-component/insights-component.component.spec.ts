import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightsComponentComponent } from './insights-component.component';

describe('InsightsComponentComponent', () => {
  let component: InsightsComponentComponent;
  let fixture: ComponentFixture<InsightsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsightsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsightsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
