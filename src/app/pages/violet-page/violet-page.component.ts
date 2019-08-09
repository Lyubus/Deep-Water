import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IKeyValuePair } from 'src/app/_models/interfaces/key-value.interface';

@Component({
  selector: 'deepwater-violet-page',
  templateUrl: './violet-page.component.html',
  styleUrls: ['./violet-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VioletPageComponent implements OnInit {

  comparisonCollection: IKeyValuePair[] = [
    { key: 0, value: 'item1' },
    { key: 2, value: 'item2' },
  ];
  selectedComparer = 0;

  constructor() { }

  ngOnInit() {
  }

}
