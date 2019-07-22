import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopWidgetComponentComponent } from './top-widget-component.component';

describe('TopWidgetComponentComponent', () => {
  let component: TopWidgetComponentComponent;
  let fixture: ComponentFixture<TopWidgetComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopWidgetComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopWidgetComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
