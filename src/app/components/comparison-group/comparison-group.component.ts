import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { IKeyValuePair } from 'src/app/_models/interfaces/key-value.interface';

@Component({
  selector: 'deepwater-comparison-group',
  templateUrl: './comparison-group.component.html',
  styleUrls: ['./comparison-group.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ComparisonGroupComponent implements OnInit {

  @Input() selected: any = null;
  @Output() selectedChange: EventEmitter<any> = new EventEmitter<any>();

  @Input() optionsCollection: IKeyValuePair[] = [];

  constructor() { }

  ngOnInit() {
  }

}
