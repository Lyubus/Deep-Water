import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';

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
    CommentsComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
