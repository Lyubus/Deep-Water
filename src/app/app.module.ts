import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalReportPageComponent } from './pages/personal-report-page/personal-report-page.component';
import { ReportComponentComponent } from './components/report-component/report-component.component';
import { ScoreChartComponentComponent } from './components/score-chart-component/score-chart-component.component';
import { PersonsCountComponentComponent } from './components/persons-count-component/persons-count-component.component';
import { CompletionChartComponentComponent } from './components/completion-chart-component/completion-chart-component.component';
import { SkillsListComponentComponent } from './components/skills-list-component/skills-list-component.component';
import { TopWidgetComponentComponent } from './components/top-widget-component/top-widget-component.component';
import { ProgressWidgetComponentComponent } from './components/progress-widget-component/progress-widget-component.component';
import { InsightsComponentComponent } from './components/insights-component/insights-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalReportPageComponent,
    ReportComponentComponent,
    ScoreChartComponentComponent,
    PersonsCountComponentComponent,
    CompletionChartComponentComponent,
    SkillsListComponentComponent,
    TopWidgetComponentComponent,
    ProgressWidgetComponentComponent,
    InsightsComponentComponent
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
