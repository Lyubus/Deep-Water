import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'deepwater-radial-gauge',
  templateUrl: './radial-gauge.component.html',
  styleUrls: ['./radial-gauge.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RadialGaugeComponent implements OnInit {

  @Input() value: number;
  @Input() color: string;
  @Input() text: string;
  @Input() showLegend: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
