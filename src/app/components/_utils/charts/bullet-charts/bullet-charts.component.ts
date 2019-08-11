import { Component, OnInit, Input } from '@angular/core';
import { IPersonalScore } from 'src/app/_models/interfaces/personal-score.interface';
import { PlotBand } from '@progress/kendo-angular-charts';

@Component({
  selector: 'deepwater-bullet-charts',
  templateUrl: './bullet-charts.component.html',
  styleUrls: ['./bullet-charts.component.scss']
})
export class BulletChartsComponent{

  @Input() bulletChartData: IPersonalScore;

  public hidden: any = { visible: false };
  public plotBands: PlotBand[] = [{
      from: 0, to: 75, color: '#e62325', opacity: 1
  }];

}
