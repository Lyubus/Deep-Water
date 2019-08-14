import { Component, ViewEncapsulation, forwardRef, Inject } from '@angular/core';
import { PERSONAL_SCORES } from './../../_constant-mocks/personal-scores.constants';
import { IPersonalScore } from './../../_models/interfaces/personal-score.interface';
import { BaseService } from './../../_services/base.service';

@Component({
  selector: 'deepwater-violet-page',
  templateUrl: './violet-page.component.html',
  styleUrls: ['./violet-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VioletPageComponent {

  comparer1Profile: IPersonalScore = {
    examinee: 'Joanie Koeller',
    analyticalAbilityValue: 47,
    quickThinkingValue: 27,
    performanceUnderPreassureValue: 99,
    adaptabilityValue: 48,
    averageScoreValue: 37,
    completionValue: 44,
    color: '#0da3ff',
    flexibleThinkingValue: 0,
    strategicThinkingValue: 0,
    planningValue: 0,
    eficiencyValue: 0
  };

  personalScoreData: IPersonalScore[] = PERSONAL_SCORES;
  comparer2Profile: IPersonalScore;

  constructor(@Inject(forwardRef(() => BaseService)) public baseService: BaseService) {
    this.baseService.selectedChange.subscribe((data) => {
      if (data) {
        this.comparer2Profile = data;
      } else {
        this.comparer2Profile = this.personalScoreData[0];
      }
    });
  }
}
