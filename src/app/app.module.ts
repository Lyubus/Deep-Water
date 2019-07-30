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
import { PersonalReportPageComponent } from './pages/personal-report-page/personal-report-page.component';
import { ReportTableComponent } from './components/report/report-table.component';
import { ScoreChartComponent } from './components/score-chart/score-chart.component';
import { PersonsCountComponent } from './components/persons-count/persons-count.component';
import { CompletionChartComponent } from './components/completion-chart/completion-chart.component';
import { SkillsListComponent } from './components/skills-list/skills-list.component';
import { TopWidgetComponent } from './components/top-widget/top-widget.component';
import { ProgressWidgetComponent } from './components/progress-widget/progress-widget.component';
import { InsightsComponent } from './components/insights/insights.component';
import { CommentsComponent } from './components/comments/comments.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { ScatterChartComponent } from './components/_utils/charts/scatter-chart/scatter-chart.component';
import { ScoreDistributionComponent } from './components/score-distribution/score-distribution.component';
import { TopLeadersComponent } from './components/top-leaders/top-leaders.component';
import { ComparisonGroupComponent } from './components/comparison-group/comparison-group.component';
import { RadialGaugeComponent } from './components/radial-gauge/radial-gauge.component';
import { PersonalReportsComponent } from './components/personal-reports/personal-reports.component';
import { SearchFieldComponent } from './components/_utils/search-field/search-field.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonalReportPageComponent,
    ReportTableComponent,
    ScoreChartComponent,
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
    PersonalReportsComponent,
    SearchFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    BrowserAnimationsModule,
    ChartsModule,
    GaugesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
