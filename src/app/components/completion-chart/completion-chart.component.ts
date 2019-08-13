import { Component, OnInit, ViewEncapsulation, Input, OnChanges } from '@angular/core';
import { IPersonalScore } from 'src/app/_models/interfaces/personal-score.interface';
import * as _ from 'lodash';

@Component({
  selector: 'deepwater-person-completion',
  templateUrl: './completion-chart.component.html',
  styleUrls: ['./completion-chart.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CompletionChartComponent implements OnChanges {

  @Input() personalScore: IPersonalScore;
  average: number = 0;

  ngOnChanges(chnages) {
    if(chnages.personalScore){
      this.average =  Math.round(_.meanBy(
        [
          this.personalScore.analyticalAbilityValue,
          this.personalScore.quickThinkingValue,
          this.personalScore.performanceUnderPreassureValue,
          this.personalScore.adaptabilityValue,
        ], (p) => p));
    }
  }

}
