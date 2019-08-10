import { Component, ViewEncapsulation } from '@angular/core';
import { IGameScore } from 'src/app/_models/interfaces/game-scores.interface';
import { MEDIUM_GAMES_SCORES } from 'src/app/_constant-mocks/game-scores.constants';
import { INSIGHTS_WITH_ICONS } from 'src/app/_constant-mocks/insights.constant';
import { IInsight } from 'src/app/_models/interfaces/insight.interface';

@Component({
  selector: 'deepwater-indigo-page',
  templateUrl: './indigo-page.component.html',
  styleUrls: ['./indigo-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IndigoPageComponent{

  gamesData: IGameScore[] = MEDIUM_GAMES_SCORES;
  insights: IInsight[] = INSIGHTS_WITH_ICONS;
  
}
