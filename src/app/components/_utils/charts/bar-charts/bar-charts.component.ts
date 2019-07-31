import { Component, OnInit } from '@angular/core';
import { AxisLabelVisualArgs } from '@progress/kendo-angular-charts';

@Component({
  selector: 'deepwater-bar-charts',
  templateUrl: './bar-charts.component.html',
  styleUrls: ['./bar-charts.component.scss']
})
export class BarChartsComponent implements OnInit {

  chartHeight: number;
  defaultTextColor: string = '#666666';

  valueLabelsConfig = {
    // content: (e) => `${e.value}%`,
    font: `font-family: 'Open Sans', sans-serif; font-size: 14px; `,
    color: this.defaultTextColor
  };

  catLabelsConfig = {
    font: `19pt 'Open Sans', sans-serif`,
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

  data = [{
    value: 45,
    color: 'red',
    category: 'MoveIt'
  },
  {
    value: 33,
    color: 'green',
    category: 'a',
  },
  {
    value: 21,
    color: 'blue',
    category: 'Open Sans',
  },
  {
    value: 0,
    color: 'black',
    category: 'font-size',
  },
  {
    value: 76,
    color: 'violet',
    category: 'k',
  }, {
    value: 49,
    color: 'pink',
    category: 'l',
  },
  {
    value: 88,
    color: 'gray',
    category: 'p',
  },
  {
    value: 69,
    color: 'brown',
    category: 'categories = this.data.map(x => x.category);',
  }];

  categories = this.data.map(x => x.category);

  constructor() { }

  ngOnInit() {
    this.chartHeight = this.categories.length * 40 + 50;
  }

}
