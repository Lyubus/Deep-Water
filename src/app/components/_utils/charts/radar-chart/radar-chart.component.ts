import { Component, Input } from '@angular/core';
import { RadarValueAxisConfig, RadarCategoryAxisConfig } from './radar-chart.constants';
import { IRadarChartData } from 'src/app/_models/interfaces/radarchart-data.interface';

@Component({
  selector: 'deepwater-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent {

  @Input() color: string = '#145fa8';
  @Input() radarData: IRadarChartData[] = [];

  categoryAxisConfig = RadarCategoryAxisConfig;
  valueAxisConfig = RadarValueAxisConfig; 

}
