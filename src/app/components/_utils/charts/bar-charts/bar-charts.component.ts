import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'deepwater-bar-charts',
  templateUrl: './bar-charts.component.html',
  styleUrls: ['./bar-charts.component.scss']
})
export class BarChartsComponent implements OnInit {

  valueLabelsConfig = {
    // content: (e) => `${e.value}%`,
    font: `font-family: 'Open Sans', sans-serif; font-size: 14px; `,
    color: 'gray'
  };

  catLabelsConfig = {
    font: `font-family: 'Open Sans', sans-serif; font-size: 16px; `,
    color: 'gray'
  };

  data = [{
    value: 45,
    color: 'red',
    category: 'q',
  },
  {
    value: 33,
    color: 'green',
    category: 'a',
  },
  {
    value: 21,
    color: 'blue',
    category: '9',
  },
  {
    value: 0,
    color: 'black',
    category: 'g',
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
    category: '[]',
  },
  {
    value: 70,
    color: 'purple',
    category: 'pf',
  },
  {
    value: 98,
    color: 'yellow',
    category: '22',
  }
  ];

  categories = this.data.map(x => x.category);

  constructor() { }

  ngOnInit() {
  }

}
