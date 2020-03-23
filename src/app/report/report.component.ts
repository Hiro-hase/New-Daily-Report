import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PreviewService } from '../preview.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  reportForm = this.fb.group({
    startTimeHour : [7, Validators.required],
    startTimeMinute : [0, Validators.required],
    endTimeHour : [7, Validators.required],
    endTimeMinute : [0, Validators.required],
    todayTask : ['', [Validators.required]],
    todayLarnd : ['', Validators.required],
    todayQuestion : ['', Validators.required],
    todayIssue : ['', Validators.required]
  })

  optionHour = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
  optionMinute = [0, 0o5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

  constructor(private previewService: PreviewService,private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get todayTask() {
    return this.reportForm.value.todayTask;
  }

  click() {
    console.log(this.reportForm.value.startTimeHour)
    this.previewService.startTimeHour = this.reportForm.value.startTimeHour;
    this.previewService.startTimeMinute = this.reportForm.value.startTimeMinute;
    this.previewService.endTimeHour = this.reportForm.value.endTimeHour;
    this.previewService.endTimeMinute = this.reportForm.value.endTimeMinute;
    this.previewService.todayTask = this.reportForm.value.todayTask;
    this.previewService.todayLarnd = this.reportForm.value.todayLarnd;
    this.previewService.todayQuestion = this.reportForm.value.todayQuestion;
    this.previewService.todayIssue = this.reportForm.value.todayIssue
  }

}
