import { Component, ViewEncapsulation } from '@angular/core';
import { IGameScore } from 'src/app/_models/interfaces/game-scores.interface';
import { MEDIUM_GAMES_SCORES } from 'src/app/_constant-mocks/game-scores.constants';

@Component({
  selector: 'deepwater-indigo-page',
  templateUrl: './indigo-page.component.html',
  styleUrls: ['./indigo-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IndigoPageComponent{

  gamesData: IGameScore[] = MEDIUM_GAMES_SCORES;
  
}
