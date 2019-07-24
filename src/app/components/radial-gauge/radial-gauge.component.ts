import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'deepwater-radial-gauge',
  templateUrl: './radial-gauge.component.html',
  styleUrls: ['./radial-gauge.component.scss']
})
export class RadialGaugeComponent implements OnInit {

  @Input('value') value: number;

  constructor() { }

  ngOnInit() {
  }

}
