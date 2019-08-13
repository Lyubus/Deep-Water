import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'deepwater-page-head',
  templateUrl: './page-head.component.html',
  styleUrls: ['./page-head.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PageHeadComponent{

  @Input() title: string;

  
  onSignOut() {}
}
