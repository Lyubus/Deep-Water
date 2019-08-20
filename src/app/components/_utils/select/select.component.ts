import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IPersonalScore } from './../../../_models/interfaces/personal-score.interface';

@Component({
  selector: 'deepwater-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {

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
