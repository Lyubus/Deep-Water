import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'deepwater-barcharts-paired-vertical',
  templateUrl: './barcharts-paired-vertical.component.html',
  styleUrls: ['./barcharts-paired-vertical.component.scss']
})
export class BarchartsPairedVerticalComponent implements OnInit {

  dataSets = [
    {
      color: '#809400',
      name: 'National bank of Slovakia',
      values: [78, 72, 73, 74, 75]
    },
    {
      color: '#45566b',
      name: 'Bankers in Israel',
      values: [77, 66, 95, 84, 83]
    }
  ];

  catConfigs = {
    categories: ['Analytical ability', 'Calculation', 'Quick thinking', 'Focus', 'Learning aptitude'],
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

  legendMarkersConfig = {type: 'circle'};


  constructor() { }

  ngOnInit() {
  }

}
