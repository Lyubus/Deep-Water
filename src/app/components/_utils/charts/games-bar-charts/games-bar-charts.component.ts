import { Component, OnInit, Input } from '@angular/core';
import { AxisLabelVisualArgs } from '@progress/kendo-angular-charts';
import { IGameScore } from 'src/app/_models/interfaces/game-scores.interface';

@Component({
  selector: 'deepwater-games-bar-charts',
  templateUrl: './games-bar-charts.component.html',
  styleUrls: ['./games-bar-charts.component.scss']
})
export class GamesBarChartsComponent implements OnInit {

  @Input() gamesData: IGameScore[] = [];

  chartHeight: number;
  defaultTextColor: string = '#666666';

  valueLabelsConfig = {
    // content: (e) => `${e.value}%`,
    font: `font-family: 'Open Sans', sans-serif; font-size: 14px; `,
    color: this.defaultTextColor
  };

  catLabelsConfig = {
    font: `14pt 'Open Sans', sans-serif`,
    color: this.defaultTextColor,
    // mirror: true,
    padding: {
      right: 10
    },
    content: (e) => {
      const value = e.value;
      if (value.length > 15) {
        return value.substring(0, 15).concat('...');
      } else {
        return value;
      }
    },
    // visual: (e: AxisLabelVisualArgs) => {
    //   console.log(e.options);
    // }
  };

  constructor() { }

  ngOnInit() {
    this.chartHeight = this.gamesData.length * 40 + 50;
  }

}
