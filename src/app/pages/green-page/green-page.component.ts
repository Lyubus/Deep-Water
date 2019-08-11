import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IPersonalScore } from 'src/app/_models/interfaces/personal-score.interface';

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


}
