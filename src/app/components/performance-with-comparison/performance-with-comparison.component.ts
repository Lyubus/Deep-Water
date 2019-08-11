import { Component, OnInit, Input } from '@angular/core';
import { IPersonalScore } from 'src/app/_models/interfaces/personal-score.interface';

@Component({
  selector: 'deepwater-performance-with-comparison',
  templateUrl: './performance-with-comparison.component.html',
  styleUrls: ['./performance-with-comparison.component.scss']
})
export class PerformanceWithComparisonComponent implements OnInit {

  @Input() bulletChartData: IPersonalScore;
  
  constructor() { }

  ngOnInit() {
  }

}
