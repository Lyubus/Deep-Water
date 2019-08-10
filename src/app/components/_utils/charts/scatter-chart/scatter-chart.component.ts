import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ScatterTooltipOptions, ScatterMarkerOptions } from './scatter-chart.constants';
import { IScatterChartData } from 'src/app/_models/interfaces/scatterchart-data-interface';

@Component({
  selector: 'deepwater-scatter-chart',
  templateUrl: './scatter-chart.component.html',
  styleUrls: ['./scatter-chart.component.scss']
})
export class ScatterChartComponent implements OnChanges {

  @Input() scatterChartData: IScatterChartData;
  @Input() color: string = '#339bd9';

  markerConfiguration: any = ScatterMarkerOptions;
  tooltipConfiguration: any = ScatterTooltipOptions;

  xAxeLabelsConfig = {
    content: (e) => {
      if (this.scatterChartData && this.scatterChartData.categoriesMap) {
        const map = this.scatterChartData.categoriesMap.get(e.value);
        return map ? map.replace(' ', '\n') : '';
      } else {
        return '';
      }
    },
    font: `font-family: 'Open Sans', sans-serif; font-size: 20px; `,
  };

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.markerConfiguration.border.color = this.color;
    this.tooltipConfiguration.border.color = this.color;
    this.markerConfiguration.background = this.color;
    this.tooltipConfiguration.background = this.color;
  }


}
