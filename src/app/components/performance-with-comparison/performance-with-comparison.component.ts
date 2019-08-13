import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter  } from '@angular/core';
import { IPersonalScore } from 'src/app/_models/interfaces/personal-score.interface';
import { IBulletChartDataItem } from 'src/app/_models/interfaces/bulletchart-data.interface';
import { PERSONAL_SCORES } from 'src/app/_constant-mocks/personal-scores.constants';
import * as _ from 'lodash';

@Component({
  selector: 'deepwater-performance-with-comparison',
  templateUrl: './performance-with-comparison.component.html',
  styleUrls: ['./performance-with-comparison.component.scss']
})
export class PerformanceWithComparisonComponent implements OnChanges {

  @Input() bulletChartData: IPersonalScore;
  @Input() selected: IPersonalScore = null;
  @Output() selectedChange: EventEmitter<IPersonalScore> = new EventEmitter<IPersonalScore>();
  @Input() optionsCollection: IPersonalScore[] = [];
  personalScoreData: IPersonalScore[] = PERSONAL_SCORES;
  
  chartData: IBulletChartDataItem[];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.bulletChartData) {
      this.chartData = [];

      this.chartData.push({
        color: '#809400',
        boundary: 80,
        name: 'Average score',
        value: Math.round(_.meanBy([
          this.bulletChartData.flexibleThinkingValue,
          this.bulletChartData.performanceUnderPreassureValue,
          this.bulletChartData.strategicThinkingValue,
          this.bulletChartData.planningValue,
          this.bulletChartData.eficiencyValue,
          this.bulletChartData.analyticalAbilityValue,
          this.bulletChartData.quickThinkingValue
        ], p => p)),
      });

      this.chartData.push({
        boundary: 75,
        color: this.bulletChartData.color,
        name: 'Flexible thinking',
        value: this.bulletChartData.flexibleThinkingValue,
      });

      this.chartData.push({
        boundary: 78,
        color: this.bulletChartData.color,
        name: 'Performance under preassure',
        value: this.bulletChartData.performanceUnderPreassureValue,
      });

      this.chartData.push({
        boundary: 80,
        color: this.bulletChartData.color,
        name: 'Strategic thinking',
        value: this.bulletChartData.strategicThinkingValue,
      });

      this.chartData.push({
        boundary: 90,
        color: this.bulletChartData.color,
        name: 'Planning',
        value: this.bulletChartData.planningValue,
      });

      this.chartData.push({
        boundary: 60,
        color: this.bulletChartData.color,
        name: 'Eficiency',
        value: this.bulletChartData.eficiencyValue,
      });

      this.chartData.push({
        boundary: 80,
        color: this.bulletChartData.color,
        name: 'Analitycal ability',
        value: this.bulletChartData.analyticalAbilityValue,
      });

      this.chartData.push({
        boundary: 65,
        color: this.bulletChartData.color,
        name: 'Quick thinking',
        value: this.bulletChartData.quickThinkingValue,
      });

    }
  }


}
