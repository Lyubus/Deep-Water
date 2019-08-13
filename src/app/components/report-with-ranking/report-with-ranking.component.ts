import { IPersonalScore } from 'src/app/_models/interfaces/personal-score.interface';
import { Component, ViewEncapsulation, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { SkillRanking } from 'src/app/_models/interfaces/skill-ranking.type';
import * as _ from 'lodash';

@Component({
  selector: 'deepwater-report-with-ranking',
  templateUrl: './report-with-ranking.component.html',
  styleUrls: ['./report-with-ranking.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReportWithRankingComponent implements OnChanges {

  analyticalAbilityRate = new SkillRanking('Analytical ability');//
  quickThinkingRate = new SkillRanking('Quick thinking');//
  performanceUnderPreassureRate = new SkillRanking('Performance under presure');
  averageScoreRate = new SkillRanking('Average score');
  completionRate = new SkillRanking('Completion');
  adaptabilityRate = new SkillRanking('Adaptability');

  constructor() {
    this.skillRankings = [
      this.performanceUnderPreassureRate,
      this.completionRate,
      this.adaptabilityRate,
      this.analyticalAbilityRate,
      this.quickThinkingRate,
      this.averageScoreRate
    ];
  }


  @Input() personalScoreData: IPersonalScore[];
  skillRankings: SkillRanking[] = [];
  sort: SortDescriptor[] = [];
  personScoreView: GridDataResult;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.personalScoreData) {
      this.reloadTable();
    }
  }

  public sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
    this.reloadTable();
  }

  private reloadTable(): void {
    this.personScoreView = {
      data: orderBy(this.personalScoreData, this.sort),
      total: this.personalScoreData.length
    };
  }

  checkRange(val, bottom, top) {
    return val !== null && bottom !== null && top !== null && val > bottom && val <= top;
  }

  dataStateChange(state: DataStateChangeEvent): void {

  }

}
