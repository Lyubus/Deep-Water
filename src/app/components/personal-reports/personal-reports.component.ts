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

  public personScoreView: GridDataResult;
  public sort: SortDescriptor[] = [
    //   {
    //   field: 'examinee',
    //   dir: 'asc'
    // }
  ];


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

  public dataStateChange(state: DataStateChangeEvent): void {
  }
}
