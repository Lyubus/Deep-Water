import { Component, OnInit, Input, Inject, forwardRef } from '@angular/core';
import { IPersonalScore } from './../../../_models/interfaces/personal-score.interface';
import { BaseService } from './../../../_services/base.service';

@Component({
  selector: 'deepwater-comparison-group-select',
  templateUrl: './comparison-group-select.component.html',
  styleUrls: ['./comparison-group-select.component.scss']
})
export class ComparisonGroupSelectComponent implements OnInit {
  @Input() optionsCollection: IPersonalScore[] = [];

  // KNKFLHOERHGHERKHGKJERHGJKERHKJGERKJhjk
  // &!&!&&!&!&&!777&&?!??!?
  constructor(@Inject(forwardRef(() => BaseService)) public baseService: BaseService) { }

  ngOnInit() {

  }

  onModelChange(event: IPersonalScore) {
    this.baseService.selectedChange.next(event);
  }
}
