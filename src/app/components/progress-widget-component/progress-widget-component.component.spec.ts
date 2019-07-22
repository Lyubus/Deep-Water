import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressWidgetComponentComponent } from './progress-widget-component.component';

describe('ProgressWidgetComponentComponent', () => {
  let component: ProgressWidgetComponentComponent;
  let fixture: ComponentFixture<ProgressWidgetComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressWidgetComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressWidgetComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
