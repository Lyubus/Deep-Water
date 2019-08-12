import { Component, ViewEncapsulation } from '@angular/core';
import { IPersonalScore } from 'src/app/_models/interfaces/personal-score.interface';
import { PERSONAL_SCORES } from 'src/app/_constant-mocks/personal-scores.constants';
import { IInsight } from 'src/app/_models/interfaces/insight.interface';
import { INSIGHTS } from 'src/app/_constant-mocks/insights.constant';

@Component({
  selector: 'deepwater-green-page',
  templateUrl: './green-page.component.html',
  styleUrls: ['./green-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GreenPageComponent {

  allPersonalReports: IPersonalScore[] = PERSONAL_SCORES;
  personReport: IPersonalScore = {
    examinee: 'Rossana Fremont',
    analyticalAbilityValue: 42,
    quickThinkingValue: 86,
    performanceUnderPreassureValue: 94,
    adaptabilityValue: 97,
    averageScoreValue: 55,
    completionValue: 42,
    color: '#fb6900',
    flexibleThinkingValue: 0,
    strategicThinkingValue: 0,
    planningValue: 0,
    eficiencyValue: 0,
};

personalScoreReports: IPersonalScore[] = PERSONAL_SCORES;
generalInsights: IInsight[] = INSIGHTS;

}
