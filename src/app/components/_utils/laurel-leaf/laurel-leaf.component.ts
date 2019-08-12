import { Component, OnInit, Input } from '@angular/core';
import { LAUREL_LEAF_DATAS } from 'src/app/_constant-mocks/laurel-leaf.constant';

@Component({
  selector: 'deepwater-laurel-leaf',
  templateUrl: './laurel-leaf.component.html',
  styleUrls: ['./laurel-leaf.component.scss']
})
export class LaurelLeafComponent implements OnInit {

  @Input('score') score: number;
  @Input('description') description: string;
  imgPath: string;

  constructor() { }

  ngOnInit() {
    LAUREL_LEAF_DATAS.map((x: { imgPath: string, score: number }) => {
      if (Math.floor(this.score / 10) === x.score) {
        this.imgPath = x.imgPath;
      }
    });
  }

}
