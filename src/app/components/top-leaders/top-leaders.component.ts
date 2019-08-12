import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LAUREL_LEAF_DATAS } from 'src/app/_constant-mocks/laurel-leaf.constant';

@Component({
  selector: 'deepwater-top-leaders',
  templateUrl: './top-leaders.component.html',
  styleUrls: ['./top-leaders.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TopLeadersComponent implements OnInit {

  laurelLeaf = LAUREL_LEAF_DATAS.filter(x => Math.floor(x.score / 10) === 3);

  constructor() { }

  ngOnInit() {
  }

}
