import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'deepwater-scatter-chart',
  templateUrl: './scatter-chart.component.html',
  styleUrls: ['./scatter-chart.component.scss']
})
export class ScatterChartComponent implements OnInit {

  mainColor = '#809400';
  public markerConfiguration = {
    background: this.mainColor,
    size: 5,
    type: 'circle',
    visible: true,
    border: {
      color: this.mainColor
    }
  };

  public labelConfiguration =
    {
    };

  public tooltipConfiguration = {
    visible: true,
    background: this.mainColor,
    color: '#ffffff',
    border: {
      color: this.mainColor
    }
  };

  public chargeData = [{
   // current: 'flexible thinking',
    stats: [
      { position: 'flexible thinking', score: 10 },
      { position: 'flexible thinking', score: 20 },
      { position: 'flexible thinking', score: 25 },
      { position: 'flexible thinking', score: 40 },
      { position: 'flexible thinking', score: 50 },
      { position: 'flexible thinking', score: 60 },
      { position: 'flexible thinking', score: 70 },
      { position: 'flexible thinking', score: 80 },
      { position: 'flexible thinking', score: 100 }
    ]}
   ];

  constructor() { }

  ngOnInit() {
  }

}
