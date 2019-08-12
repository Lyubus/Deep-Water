import { Component, Input } from '@angular/core';
import { IInsight } from 'src/app/_models/interfaces/insight.interface';

@Component({
  selector: 'deepwater-general-insights',
  templateUrl: './general-insights.component.html',
  styleUrls: ['./general-insights.component.scss']
})
export class GeneralInsightsComponent{

  @Input() insights: IInsight[];

}
