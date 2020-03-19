import { Component, OnInit } from '@angular/core';
import { PreviewService } from '../preview.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  get startTimeHour() {
    return this.previewService.startTimeHour;
  }

  get startTimeMinute() {
    return this.previewService.startTimeMinute;
  }

  get todayTask() {
    return this.previewService.todayTask;
  }

  get todayLarnd() {
    return this.previewService.todayLarnd;
  }

  get todayQuestion() {
    return this.previewService.todayQuestion;
  }

  get todayIssue() {
    return this.previewService.todayIssue;
  }

  constructor(private previewService: PreviewService) { }

  ngOnInit(): void {
  }

}
