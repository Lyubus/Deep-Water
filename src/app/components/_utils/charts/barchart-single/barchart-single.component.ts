import { Component, OnInit, Input } from '@angular/core';
import { IBulletChartDataItem } from 'src/app/_models/interfaces/bulletchart-data.interface';

@Component({
  selector: 'deepwater-barchart-single',
  templateUrl: './barchart-single.component.html',
  styleUrls: ['./barchart-single.component.scss']
})
export class BarchartSingleComponent implements OnInit {

  @Input() chartData: IBulletChartDataItem;

  catLabelsConfig = {
    font: `18pt 'Open Sans', sans-serif`,
    color: '#666666',
    padding: {
      right: 30
    },
  };


  seriesLabelsConfig = {
    content: (e) => 'HIGH', // e.dataItem.name,
    font: `font-family: 'Open Sans', sans-serif; font-size: 20px;
     font-weight: bold; `,
    visible: true,
    position: 'right',
    background: 'transparent',
    color: 'white'
  };

  constructor() { }

  ngOnInit() {

  }

}
