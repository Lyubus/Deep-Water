import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'deepwater-progress-widget',
  templateUrl: './progress-widget.component.html',
  styleUrls: ['./progress-widget.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProgressWidgetComponent implements OnInit {

  @Input() registered: number = 0;
  @Input() passive: number = 0 ;
  @Input() active: number = 0;
  @Input() completed: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
