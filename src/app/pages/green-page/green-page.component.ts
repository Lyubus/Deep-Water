import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IPersonalScore } from 'src/app/_models/interfaces/personal-score.interface';
import { PERSONAL_SCORES } from 'src/app/_constant-mocks/personal-scores.constants';
import { PERSON_SCORES } from 'src/app/_constant-mocks/person-score.constants';
import { IPersonScore } from 'src/app/_models/interfaces/person-score.interface';

@Component({
  selector: 'deepwater-green-page',
  templateUrl: './green-page.component.html',
  styleUrls: ['./green-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GreenPageComponent {

  personReport: IPersonalScore = {
    examinee: 'Rossana Fremont',
    analyticalAbilityValue: 42,
    quickThinkingValue: 86,
    performanceUnderPreassureValue: 94,
    adaptabilityValue: 97,
    averageScoreValue: 55,
    completionValue: 42,
    color: 'red',
    flexibleThinkingValue: 0,
    strategicThinkingValue: 0,
    planningValue: 0,
    eficiencyValue: 0,
};

personalScoreReports: IPersonalScore[] = PERSONAL_SCORES;
personScoreReports: IPersonScore[] = PERSON_SCORES
}
