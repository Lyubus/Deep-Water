import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'deepwater-comparison-group',
  templateUrl: './comparison-group.component.html',
  styleUrls: ['./comparison-group.component.scss']
})
export class ComparisonGroupComponent implements OnInit {

  @Input('defaultOption') defaultOption: string;

  constructor() { }

  ngOnInit() {
  }

}
