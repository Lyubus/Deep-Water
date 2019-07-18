import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalReportPageComponent } from './pages/personal-report-page/personal-report-page.component';


const routes: Routes = [
  { path: '', component: PersonalReportPageComponent },
  { path: '**', component: PersonalReportPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
