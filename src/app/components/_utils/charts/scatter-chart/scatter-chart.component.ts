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
  categoriesMap = new Map<number, string>([
    [0, ''], [1, 'Flexible thinking'], [2, 'Performance under preasure'],
    [3, 'Strategic thinking'], [4, 'Planning'], [5, 'Eficiency'],
    [6, 'Analytical ability'], [7, 'Quick thinking'], [8, '']
  ]);

  xAxeLabelsConfig = {
    content: (e) => {
      return this.categoriesMap.get(e.value).replace(' ', '\n');
    },
    font: `font-family: 'Open Sans', sans-serif; font-size: 20px; `,

  };

  xAxisCategories = {
    categories: ['a', 'b', 'c', 'd', 'e']
  };

  public chargeData = [[
    { position: 1, score: 66, display: 'sfdsf' },
    { position: 2, score: 76, display: 'sfdsf' },
    { position: 4, score: 90, display: 'sfdsf' },
    { position: 4, score: 50, display: 'sfdsf' }
  ]];

  constructor() { }

  ngOnInit() {
  }

}
