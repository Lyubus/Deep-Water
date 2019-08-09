import { Component, OnInit, Input } from '@angular/core';
import { IPersonalScore } from 'src/app/_models/interfaces/personal-score.interface';

@Component({
  selector: 'deepwater-personal-reports',
  templateUrl: './personal-reports.component.html',
  styleUrls: ['./personal-reports.component.scss']
})
export class PersonalReportsComponent implements OnInit {

  @Input() personalScoreData: IPersonalScore[] = [];

  constructor() { }

  ngOnInit() {
  }

}
