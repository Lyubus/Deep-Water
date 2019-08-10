import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'deepwater-testimonial-completion-rate',
  templateUrl: './testimonial-completion-rate.component.html',
  styleUrls: ['./testimonial-completion-rate.component.scss']
})
export class TestimonialCompletionRateComponent implements OnChanges {

  @Input() testimonial: string;
  @Input() valueNumer: number;
  @Input() allNumber: number;
  @Input() color: string = '#809400';

  label: string;
  percentage: number;

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if (changes.valueNumer || changes.allNumber) {
      this.label = `${this.valueNumer}/${this.allNumber} Examinees`;
      this.percentage = Math.round(this.valueNumer / this.allNumber * 100);
    }
  }

}
