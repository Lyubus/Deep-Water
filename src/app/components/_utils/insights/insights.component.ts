import { Component, ViewEncapsulation, Input } from '@angular/core';
import { IInsight } from 'src/app/_models/interfaces/insight.interface';

@Component({
  selector: 'deepwater-insight',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InsightsComponent {

  @Input() insight: IInsight;

}
