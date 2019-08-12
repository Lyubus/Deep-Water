import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'deepwater-score-rate-component',
  templateUrl: './score-rate-component.component.html',
  styleUrls: ['./score-rate-component.component.scss']
})
export class ScoreRateComponentComponent implements OnInit {

  @Input('skillsData') skillsData;

  constructor() { }

  ngOnInit() {
  }

}
