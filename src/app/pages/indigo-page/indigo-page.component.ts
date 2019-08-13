import { Component, ViewEncapsulation } from '@angular/core';
import { IGameScore } from 'src/app/_models/interfaces/game-scores.interface';
import { MEDIUM_GAMES_SCORES } from 'src/app/_constant-mocks/game-scores.constants';
import { INSIGHTS_WITH_ICONS } from 'src/app/_constant-mocks/insights.constant';
import { IInsight } from 'src/app/_models/interfaces/insight.interface';
import { IRadarChartData } from 'src/app/_models/interfaces/radarchart-data.interface';

@Component({
  selector: 'deepwater-indigo-page',
  templateUrl: './indigo-page.component.html',
  styleUrls: ['./indigo-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IndigoPageComponent {

  gamesData: IGameScore[] = MEDIUM_GAMES_SCORES;
  insights: IInsight[] = INSIGHTS_WITH_ICONS;
  testimonials: any[] = [
    {
    testimonial: "Analitycal ability",
    valueNumer: 4,
    allNumber: 28,
    color: '#e41e26'
  }
]

  radarChartData: IRadarChartData[] = [
    { name: 'Calculation', value: 98 },
    { name: 'Quick thinking', value: 97 },
    { name: 'Learning aptitude', value: 84 },
    { name: 'Focus', value: 65 },
    { name: 'Planning', value: 87 },
    { name: 'Systemic vision', value: 72 },
    { name: 'Prioritization', value: 0 },
    { name: 'Resource management', value: 62 },
    { name: 'Time management', value: 95 },
    { name: 'Persistance', value: 86 },
    { name: 'Task switching', value: 100 },
    { name: 'Adaptability', value: 95 }
  ];

}
