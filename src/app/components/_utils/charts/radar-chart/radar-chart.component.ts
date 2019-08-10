import { Component, Input } from '@angular/core';

@Component({
  selector: 'deepwater-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent {

  @Input() color: string = '#145fa8';

  lineConfig = {
    color: this.color,
    width: 2
  };

  valueAxisConfig = {
    background: '#cccccc',
    color: 'black',
    line: {
      color: 'black',
    }
  };

  public banksData = [
    { name: "JP Morgan", pre: 2, post: 64 },
    { name: "HSBC", pre: 39, post: 85 },
    { name: "Credit Suisse", pre: 90, post: 97 },
    { name: "Goldman Sachs", pre: 75, post: 27 },
    { name: "Morgan Stanley", pre: 100, post: 16 },
    { name: "Societe Generale", pre: 49, post: 26 },
    { name: "UBS", pre: 80, post: 35 },
    { name: "BNP Paribas", pre: 116, post: 32 },
    { name: "Unicredit", pre: 108, post: 26 },
    { name: "Credit Agricole", pre: 90, post: 17 },
    { name: "Deutsche Bank", pre: 67, post: 10 },
    { name: "Barclays", pre: 76, post: 7 },
    { name: "Citigroup", pre: 91, post: 19 },
    { name: "RBS", pre: 63, post: 5 }
  ];

  public labelContent(e: any): string {
    return `${e.dataItem.time.substring(0, 2)}h`;
  }

}
