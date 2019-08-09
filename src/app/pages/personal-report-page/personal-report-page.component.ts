import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'deepwater-personal-report-page',
    templateUrl: './personal-report-page.component.html',
    styleUrls: ['./personal-report-page.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class PersonalReportPageComponent {

    title = 'deepwater';
    isOrganizationMenuOpened: boolean = false;
    themeName = 'theme-greentheme';
  
   
}
