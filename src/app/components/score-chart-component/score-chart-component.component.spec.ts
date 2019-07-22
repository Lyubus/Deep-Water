import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreChartComponentComponent } from './score-chart-component.component';

describe('ScoreChartComponentComponent', () => {
  let component: ScoreChartComponentComponent;
  let fixture: ComponentFixture<ScoreChartComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreChartComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreChartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
