import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { LAUREL_LEAF_DATAS } from 'src/app/_constant-mocks/laurel-leaf.constant';

@Component({
  selector: 'deepwater-laurel-leaf',
  templateUrl: './laurel-leaf.component.html',
  styleUrls: ['./laurel-leaf.component.scss']
})
export class LaurelLeafComponent implements OnChanges {

  @Input() score: number;
  @Input() description: string;
  imgPath: string;

  ngOnChanges(chnages) {
    if (chnages.score) {
      LAUREL_LEAF_DATAS.map((x: { imgPath: string, score: number }) => {
        if (Math.ceil(this.score / 10) === x.score) {
          this.imgPath = x.imgPath;
        }
      });
    }
  }

}
