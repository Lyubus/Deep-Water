import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { IPersonalScore } from 'src/app/_models/interfaces/personal-score.interface';
import * as _ from 'lodash';

@Component({
  selector: 'deepwater-barcharts-comparison',
  templateUrl: './barcharts-comparison.component.html',
  styleUrls: ['./barcharts-comparison.component.scss']
})
export class BarchartsComparisonComponent implements OnChanges {


  @Input() comparisonData: IPersonalScore[];
  columnChartsData;

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if (changes.comparisonData) {

      const coldata = _.map(this.comparisonData, x => {
        return {
          color: x.color,
          person: x.examinee,
          values: [
            x.analyticalAbilityValue,
            x.quickThinkingValue,
            x.performanceUnderPreassureValue,
            x.adaptabilityValue
          ]
        }
      })

      this.columnChartsData = {
        data: coldata,
        categories: [
          'Analiitycal ability',
          'Quick thinking',
          'Perfornabce under preassure',
          'Adaptability']
      }
    }
  }

}
