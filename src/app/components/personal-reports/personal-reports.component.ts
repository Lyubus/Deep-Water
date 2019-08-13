import { IPersonalScore } from 'src/app/_models/interfaces/personal-score.interface';
import { IPersonScore } from 'src/app/_models/interfaces/person-score.interface';
import { Component, OnInit, ViewEncapsulation, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'deepwater-personal-reports',
  templateUrl: './personal-reports.component.html',
  styleUrls: ['./personal-reports.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PersonalReportsComponent implements OnChanges {

  @Input() personalScoreData: IPersonalScore[];

  skills: any[] = [
    {
      title: 'Flexible thinking',
      poor: 55,
      fair: 75,
      good: 85,
      veryGood: 95
    },
    {
      title: 'Strategic thinking',
      poor: 55,
      fair: 75,
      good: 85,
      veryGood: 95
    },
    {
      title: 'Planing',
      poor: 55,
      fair: 75,
      good: 85,
      veryGood: 95
    }
  ];

  public sort: SortDescriptor[] = [{
    field: 'examinee',
    dir: 'asc'
  }];

  public personScoreView: GridDataResult;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.personalScoreData) {
      this.personScoreView = {
        data: orderBy(this.personalScoreData, this.sort),
        total: this.personalScoreData.length
      };
    }
  }

  public dataStateChange(state: DataStateChangeEvent): void {
  }
}
