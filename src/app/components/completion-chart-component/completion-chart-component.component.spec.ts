import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletionChartComponentComponent } from './completion-chart-component.component';

describe('CompletionChartComponentComponent', () => {
  let component: CompletionChartComponentComponent;
  let fixture: ComponentFixture<CompletionChartComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletionChartComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletionChartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
