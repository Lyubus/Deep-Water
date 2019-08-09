import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'deepwater-completion-chart',
  templateUrl: './completion-chart.component.html',
  styleUrls: ['./completion-chart.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CompletionChartComponent implements OnInit {

  @Input() title: string = 'completion rate';
  @Input() subtitle: string = null;
  @Input() color: string = 'black';
  @Input() value: number = 0;
  @Input() label: string = null;

  constructor() { }

  ngOnInit() {
  }

}
