import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalReportPageComponent } from './pages/personal-report-page/personal-report-page.component';
import { VioletPageComponent } from './pages/violet-page/violet-page.component';
import { GreenPageComponent } from './pages/green-page/green-page.component';
import { IndigoPageComponent } from './pages/indigo-page/indigo-page.component';


const routes: Routes = [
  { path: '',  component: VioletPageComponent },
  { path: 'violet', component: VioletPageComponent },
  { path: 'green', component: GreenPageComponent },
  { path: 'indigo', component: IndigoPageComponent },
  { path: 'allcomponents', component: PersonalReportPageComponent },
  { path: '**', component: VioletPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
