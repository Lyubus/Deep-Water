import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PlotBand } from '@progress/kendo-angular-charts';
import { IBulletChartDataItem } from 'src/app/_models/interfaces/bulletchart-data.interface';
import * as _ from 'lodash';
import { convertToR3QueryMetadata } from '@angular/core/src/render3/jit/directive';

@Component({
  selector: 'deepwater-bullet-charts',
  templateUrl: './bullet-charts.component.html',
  styleUrls: ['./bullet-charts.component.scss']
})
export class BulletChartsComponent implements OnChanges {


  @Input() chartData: IBulletChartDataItem[] = [];
  bulletChartData: any = [];

  labelsConfig = {
    content: (e) => e.value,
    visible: true,
  };

  public hidden: any = { visible: false };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.chartData) {

      this.bulletChartData = [];

      this.chartData.forEach(data => {
        const varData: any = _.clone(data, true);
        varData.plotBands = [
          {
            from: 0, to: data.value, color: data.color, opacity: 1
          },
          {
            from: data.value, to: 100, color: '#dadada', opacity: 1
          }
        ];

        this.bulletChartData.push(varData);
      });
    }
  }

}
