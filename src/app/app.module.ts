import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// KendoUi
import { GridModule } from '@progress/kendo-angular-grid';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { GaugesModule } from '@progress/kendo-angular-gauges';

import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonsCountComponent } from './components/persons-count/persons-count.component';
import { CompletionChartComponent } from './components/completion-chart/completion-chart.component';
import { SkillsListComponent } from './components/skills-list/skills-list.component';
import { TopWidgetComponent } from './components/top-widget/top-widget.component';
import { ProgressWidgetComponent } from './components/progress-widget/progress-widget.component';
import { InsightsComponent } from './components/_utils/insights/insights.component';
import { CommentsComponent } from './components/comments/comments.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { ScatterChartComponent } from './components/_utils/charts/scatter-chart/scatter-chart.component';
import { ScoreDistributionComponent } from './components/score-distribution/score-distribution.component';
import { TopLeadersComponent } from './components/top-leaders/top-leaders.component';
import { ComparisonGroupComponent } from './components/comparison-group/comparison-group.component';
import { BarchartsComparisonComponent } from './components/barcharts-comparison/barcharts-comparison.component';
import { BarchartsPairedVerticalComponent } from './components/_utils/charts/barcharts-paired-vertical/barcharts-paired-vertical.component';
import { CompletionComponent } from './components/completion/completion.component';
import { GamesBarChartsComponent } from './components/_utils/charts/games-bar-charts/games-bar-charts.component';
import { PersonalReportsComponent } from './components/personal-reports/personal-reports.component';
import { SearchFieldComponent } from './components/_utils/search-field/search-field.component';
import { RadialGaugeComponent } from './components/_utils/radial-gauge/radial-gauge.component';
import { VioletPageComponent } from './pages/violet-page/violet-page.component';
import { IndigoPageComponent } from './pages/indigo-page/indigo-page.component';
import { GreenPageComponent } from './pages/green-page/green-page.component';
import { PageHeadComponent } from './components/page-head/page-head.component';
import { TestimonialCompletionRateComponent } from './components/testimonial-completion-rate/testimonial-completion-rate.component';
import { GroupInsightsComponent } from './components/group-insights/group-insights.component';
import { GeneralInsightsComponent } from './components/general-insights/general-insights.component';
import { RadarChartComponent } from './components/_utils/charts/radar-chart/radar-chart.component';
import { BulletChartsComponent } from './components/_utils/charts/bullet-charts/bullet-charts.component';
import { LaurelLeafComponent } from './components/_utils/laurel-leaf/laurel-leaf.component';
import { ScoreRateComponentComponent } from './components/_utils/score-rate-component/score-rate-component.component';
import { ReportWithRankingComponent } from './components/report-with-ranking/report-with-ranking.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PersonsCountComponent,
    CompletionChartComponent,
    SkillsListComponent,
    TopWidgetComponent,
    ProgressWidgetComponent,
    InsightsComponent,
    CommentsComponent,
    UserInfoComponent,
    ScatterChartComponent,
    TopLeadersComponent,
    ComparisonGroupComponent,
    ScoreDistributionComponent,
    RadialGaugeComponent,
    BarchartsComparisonComponent,
    BarchartsPairedVerticalComponent,
    CompletionComponent,
      GamesBarChartsComponent,
      PersonalReportsComponent,
      SearchFieldComponent,
      VioletPageComponent,
      IndigoPageComponent,
      GreenPageComponent,
      PageHeadComponent,
      TestimonialCompletionRateComponent,
      GroupInsightsComponent,
      GeneralInsightsComponent,
      RadarChartComponent,
      BulletChartsComponent,
      LaurelLeafComponent,
      ScoreRateComponentComponent,
      ReportWithRankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    BrowserAnimationsModule,
    ChartsModule,
    GaugesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
