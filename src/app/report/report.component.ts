import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { PreviewService } from '../preview.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  reportForm = this.fb.group({
    startTimeHour : [''],
    startTimeMinute : [''],
    todayTask : [''],
    todayLarnd : [''],
    todayQuestion : [''],
    todayIssue : ['']
  })

  optionHour = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
  optionMinute = [0o0, 0o5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

  constructor(private previewService: PreviewService,private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  click() {
    console.log(this.reportForm.value.startTimeHour)
    this.previewService.startTimeHour = this.reportForm.value.startTimeHour;
    this.previewService.startTimeMinute = this.reportForm.value.startTimeMinute;
    this.previewService.todayTask = this.reportForm.value.todayTask;
    this.previewService.todayLarnd = this.reportForm.value.todayLarnd;
    this.previewService.todayQuestion = this.reportForm.value.todayQuestion;
    this.previewService.todayIssue = this.reportForm.value.todayIssue;
  }

}
