import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { IGameScore } from 'src/app/_models/interfaces/game-scores.interface';
import { MEDIUM_GAMES_SCORES } from '../../_constant-mocks/game-scores.constants';
import * as _ from 'lodash';

@Component({
  selector: 'deepwater-completion',
  templateUrl: './completion.component.html',
  styleUrls: ['./completion.component.scss']
})
export class CompletionComponent implements OnChanges {
 
  @Input() gamesData: IGameScore[];
  average: number = 0;

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if (changes.gamesData && this.gamesData.length) {
      this.average = Math.round(_.meanBy(this.gamesData, (p) => p.score));
    }
  }
}
