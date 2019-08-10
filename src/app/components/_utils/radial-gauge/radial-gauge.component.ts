import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'deepwater-radial-gauge',
  templateUrl: './radial-gauge.component.html',
  styleUrls: ['./radial-gauge.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RadialGaugeComponent {

  @Input() value: number;
  @Input() color: string;
  @Input() text: string;
  @Input() legendText: string;

}
