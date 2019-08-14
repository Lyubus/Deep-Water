import { Component, Input, ViewEncapsulation } from '@angular/core';
import { IPersonalScore } from 'src/app/_models/interfaces/personal-score.interface';

@Component({
  selector: 'deepwater-comparison-group',
  templateUrl: './comparison-group.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ComparisonGroupComponent {

  @Input() optionsCollection: IPersonalScore[] = [];

}
