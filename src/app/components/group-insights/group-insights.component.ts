import { Component, OnInit, Input } from '@angular/core';
import { IInsight } from 'src/app/_models/interfaces/insight.interface';
import { IRadarChartData } from 'src/app/_models/interfaces/radarchart-data.interface';

@Component({
  selector: 'deepwater-group-insights',
  templateUrl: './group-insights.component.html',
  styleUrls: ['./group-insights.component.scss']
})
export class GroupInsightsComponent implements OnInit {

  @Input() insights: IInsight[];
  @Input() radarChartData: IRadarChartData[];
  
  constructor() { }

  ngOnInit() {
  }

}
