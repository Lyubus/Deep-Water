import { Component, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { IPersonalScore } from 'src/app/_models/interfaces/personal-score.interface';

@Component({
  selector: 'deepwater-comparison-group',
  templateUrl: './comparison-group.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ComparisonGroupComponent {

  selectedValue: any;

  @Output()
  selectedChange = new EventEmitter<any>();

  @Input()
  get selected() {
    return this.selectedValue;
  }
  set selected(val) {
    this.selectedValue = val;
    this.selectedChange.emit(this.selectedValue);
  }

  @Input() optionsCollection: IPersonalScore[] = [];

}
