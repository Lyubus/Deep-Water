import { Component, OnInit, Input } from '@angular/core';
import { IInsight } from 'src/app/_models/interfaces/insight.interface';

@Component({
  selector: 'deepwater-group-insights',
  templateUrl: './group-insights.component.html',
  styleUrls: ['./group-insights.component.scss']
})
export class GroupInsightsComponent implements OnInit {

  @Input() insights: IInsight[];
  
  constructor() { }

  ngOnInit() {
  }

}
