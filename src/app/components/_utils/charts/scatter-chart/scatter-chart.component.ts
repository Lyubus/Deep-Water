import { Component, OnInit } from '@angular/core';
import { ScatterTooltipOptions, ScatterMarkerOptions } from './scatter-chart.constants';
import { defaultIterableDiffers } from '@angular/core/src/change_detection/change_detection';

@Component({
  selector: 'deepwater-scatter-chart',
  templateUrl: './scatter-chart.component.html',
  styleUrls: ['./scatter-chart.component.scss']
})
export class ScatterChartComponent implements OnInit {

  mainColor = '#809400';
  markerConfiguration = ScatterMarkerOptions;
  tooltipConfiguration = ScatterTooltipOptions;

  xAxeLabelsConfig = {
    // content: (e) => {
    //   debugger;
    //   return null;
    // },
  };

  xAxisCategories = {
    categories: ['a', 'b', 'c', 'd', 'e']
  };

  public chargeData = [[
    { position: 1, score: 56, display: 'sfdsf' },
    { position: 1, score: 66, display: 'sfdsf' },
    { position: 2, score: 76, display: 'sfdsf' },
    { position: 4, score: 90, display: 'sfdsf' },
    { position: 4, score: 50, display: 'sfdsf' }]  ];

  constructor() { }

  ngOnInit() {
  }

}
