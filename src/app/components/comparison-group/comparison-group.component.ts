import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { IPersonalScore } from 'src/app/_models/interfaces/personal-score.interface';

@Component({
  selector: 'deepwater-comparison-group',
  templateUrl: './comparison-group.component.html',
  styleUrls: ['./comparison-group.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ComparisonGroupComponent {

  @Input() selected: IPersonalScore = null;
  @Output() selectedChange: EventEmitter<IPersonalScore> = new EventEmitter<IPersonalScore>();
  @Input() optionsCollection: IPersonalScore[] = [];

}
