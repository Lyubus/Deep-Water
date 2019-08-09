import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'deepwater-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit {

  @Input('placeholder') placeholder: string;

  constructor() { }

  ngOnInit() {
  }

}
