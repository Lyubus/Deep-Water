import { Component, Input, OnChanges } from '@angular/core';
import { IColumnChartData } from 'src/app/_models/interfaces/columncharts-data.interface';

@Component({
  selector: 'deepwater-barcharts-paired-horizontal',
  templateUrl: './barcharts-paired-horizontal.component.html',
  styleUrls: ['./barcharts-paired-horizontal.component.scss']
})
export class BarchartsPairedHorizontalComponent implements OnChanges {
 

  @Input() chartsData: IColumnChartData;

  catConfigs: any = {
    labels: {
      font: `font-family: 'Open Sans', sans-serif; font-size: 20px;`
    },
    majorGridLines: {
      visible: false
    },
    line: {
      visible: false
    },
    minorGridLines: {
      visible: false
    }
  };

  valConfigs = {
    majorGridLines: {
      visible: false
    },
    visible: false,
    max: 100,
  };


  seriesLabelsConfig = {
    font: `font-family: 'Open Sans', sans-serif; font-size: 20px;
     font-weight: bold; `,
    visible: true,
    position: 'top',
    background: 'transparent',
    color: 'white'
  };

  legendLabelsConfig = {
    font: `font-family: 'Open Sans', sans-serif; font-size: 20px;`
  };

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if(changes.comparisonData){
      this.catConfigs.categories = this.chartsData.categories;
    }
  }

}
