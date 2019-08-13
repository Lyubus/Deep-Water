import { Component, OnChanges, Input } from '@angular/core';
import { ITestimonialDataItem } from 'src/app/_models/interfaces/testimonial-data.interface';

@Component({
  selector: 'deepwater-testimonial-completion-rate',
  templateUrl: './testimonial-completion-rate.component.html',
  styleUrls: ['./testimonial-completion-rate.component.scss']
})
export class TestimonialCompletionRateComponent implements OnChanges {
  
  @Input() testimonials: any[] = [];

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if (changes.testimonials) {
      this.testimonials.forEach(
        t => {
          t.label = `${t.valueNumer}/${t.allNumber} Examinees`;
          t.percentage = Math.round(t.valueNumer / t.allNumber * 100);
        }
      )
    }
  }

}
