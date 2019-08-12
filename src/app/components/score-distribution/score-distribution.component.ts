import { Component, Input, OnChanges } from '@angular/core';
import { IPersonalScore } from 'src/app/_models/interfaces/personal-score.interface';
import { IScatterChartData } from 'src/app/_models/interfaces/scatterchart-data-interface';
import { numberSymbols } from '@telerik/kendo-intl';

@Component({
  selector: 'deepwater-personal-scores-distribution',
  templateUrl: './score-distribution.component.html',
  styleUrls: ['./score-distribution.component.scss']
})
export class ScoreDistributionComponent implements OnChanges {

  @Input() personalScores: IPersonalScore[];
  scatterChartData: IScatterChartData;

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if (changes.personalScores) {

      const categories = new Map<number, string>();
      categories.set(0, '');
      categories.set(1, 'Analitycally ability');
      categories.set(2, 'Quick thinking');
      categories.set(3, 'Performance under preassure');
      categories.set(4, 'Adaptability');

      const result = {
        categoriesMap: categories,
        data: []
      };

      this.personalScores.forEach(p => {
        result.data.push({
          actor: p.examinee,
          value: p.analyticalAbilityValue,
          category: 1
        });
        result.data.push({
          actor: p.examinee,
          value: p.quickThinkingValue,
          category: 2
        });
        result.data.push({
          actor: p.examinee,
          value: p.performanceUnderPreassureValue,
          category: 3
        });
        result.data.push({
          actor: p.examinee,
          value: p.adaptabilityValue,
          category: 4
        })
      });

      this.scatterChartData = result;

    }
  }

}
