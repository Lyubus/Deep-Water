import { Component, Input } from '@angular/core';

@Component({
  selector: 'deepwater-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent {

  @Input() placeholder: string;

}
