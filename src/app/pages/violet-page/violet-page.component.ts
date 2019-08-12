import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IKeyValuePair } from 'src/app/_models/interfaces/key-value.interface';
import { PERSONAL_SCORES } from 'src/app/_constant-mocks/personal-scores.constants';
import { IPersonalScore } from 'src/app/_models/interfaces/personal-score.interface';

@Component({
  selector: 'deepwater-violet-page',
  templateUrl: './violet-page.component.html',
  styleUrls: ['./violet-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VioletPageComponent implements OnInit {

  comparisonCollection: IKeyValuePair[] = [
    { key: 0, value: 'item1' },
    { key: 2, value: 'item2' },
  ];
  selectedComparer = 0;

  personalScoreData: IPersonalScore[] = PERSONAL_SCORES
  
  comparer1Profile: IPersonalScore = {
    examinee: 'Laila Piraino',
    analyticalAbilityValue: 84,
    quickThinkingValue: 27,
    performanceUnderPreassureValue: 84,
    adaptabilityValue: 27,
    averageScoreValue: 84,
    completionValue: 54,
    color: '#0da3ff',
    flexibleThinkingValue: 0,
    strategicThinkingValue: 0,
    planningValue: 0,
    eficiencyValue: 0,
  };

  comparer2Profile: IPersonalScore = {
    examinee: 'Queen Rudy',
    analyticalAbilityValue: 12,
    quickThinkingValue: 69,
    performanceUnderPreassureValue: 45,
    adaptabilityValue: 99,
    averageScoreValue: 66,
    completionValue: 90,
    color: '#45566b',
    flexibleThinkingValue: 0,
    strategicThinkingValue: 0,
    planningValue: 0,
    eficiencyValue: 0,
  };

  constructor() { }

  ngOnInit() {
  }

}
