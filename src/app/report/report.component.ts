import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { PreviewService } from '../preview.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  reportForm = this.fb.group({
    // todayTaskForm: this.fb.array([
    //   this.fb.group({
    //     startTimeHour: [7, Validators.required],
    //     startTimeMinute: [0, Validators.required],
    //     endTimeHour: [7, Validators.required],
    //     endTimeMinute: [0, Validators.required],
    //     todayTask: ['', [Validators.required]],
    //   })
    // ]),
    todayTaskForm : this.fb.group({
      startTimeHour : [7, Validators.required],
      startTimeMinute : [0, Validators.required],
      endTimeHour : [7, Validators.required],
      endTimeMinute : [0, Validators.required],
      todayTask : ['', [Validators.required]],
    }),
    todayLarnd: ['', Validators.required],
    todayQuestion: ['', Validators.required],
    todayIssue: ['', Validators.required]
  });

  optionHour = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
  optionMinute = [0, 0o5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

  constructor(private previewService: PreviewService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get todayTaskForm() {
    return this.reportForm.get('todayTaskForm') as FormArray;
  }

  get todayTask() {
    return this.todayTaskForm.get('todayTask');
  }

  get todayLarnd() {
    return this.reportForm.get('todayLarnd');
  }

  get todayQuestion() {
    return this.reportForm.get('todayQuestion');
  }

  get todayIssue() {
    return this.reportForm.get('todayIssue');
  }

  click() {
    console.log(this.todayTaskForm.value.startTimeHour)
    console.log(this.todayTaskForm.value.todayTask)
    this.previewService.startTimeHour = this.todayTaskForm.value.startTimeHour;
    this.previewService.startTimeMinute = this.todayTaskForm.value.startTimeMinute;
    this.previewService.endTimeHour = this.todayTaskForm.value.endTimeHour;
    this.previewService.endTimeMinute = this.todayTaskForm.value.endTimeMinute;
    this.previewService.todayTask = this.todayTaskForm.value.todayTask;
    this.previewService.todayLarnd = this.reportForm.value.todayLarnd;
    this.previewService.todayQuestion = this.reportForm.value.todayQuestion;
    this.previewService.todayIssue = this.reportForm.value.todayIssue
  }

}
