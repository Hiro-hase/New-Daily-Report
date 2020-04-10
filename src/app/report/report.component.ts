import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { PreviewService } from '../preview.service';
import { CompileStylesheetMetadata, ConditionalExpr } from '@angular/compiler';

interface TaskData {
  startTimeHour: string;
  startTimeMinute: string;
  endTimeHour: string;
  endTimeMinute: string;
  todayTask: string;
}

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent {
  reportForm = this.fb.group({
    todayTaskForms: this.fb.array([
      this.fb.group({
        startTimeHour: ["07", Validators.required],
        startTimeMinute: ["00", Validators.required],
        endTimeHour: ["07", Validators.required],
        endTimeMinute: ["00", Validators.required],
        todayTask: ['', [Validators.required]],
      })
    ]),
    todayLarnd: ['', Validators.required],
    todayQuestion: ['', Validators.required],
    todayIssue: ['', Validators.required]
  });

  optionHour = ["07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22"];
  optionMinute = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];

  constructor(private previewService: PreviewService, private fb: FormBuilder) { }

  ngOnInit(): void {

  }

  get todayTaskForms(): FormArray {
    return this.reportForm.get('todayTaskForms') as FormArray;
  }

  get todayLarnd() {
    return this.reportForm.get('todayLarnd');
  }

  get todayQuestion() {
    return this.reportForm.get('todayQuestion')
  }

  get todayIssue() {
    return this.reportForm.get('todayIssue')
  }

  addTask() {
    this.todayTaskForms.push(this.fb.group({
      startTimeHour: ["07", Validators.required],
      startTimeMinute: ["00", Validators.required],
      endTimeHour: ["07", Validators.required],
      endTimeMinute: ["00", Validators.required],
      todayTask: ['', [Validators.required]],
    }))
  }

  removeTask(index: number) {
    this.todayTaskForms.removeAt(index);
  }

  preview() {
    // console.log(this.todayTaskForms.controls[0].value.todayTask)
    // 2. Formから値をtasksに代入する
    // // 3. todayTaskFormsはFormControlの配列なのでforEachで配列の要素を取得
    this.reportForm.value.todayTaskForms.forEach(formControl => {
      // console.log(formControl)
      const task: TaskData = {
        startTimeHour: formControl.startTimeHour,
        startTimeMinute: formControl.startTimeMinute,
        endTimeHour: formControl.endTimeHour,
        endTimeMinute: formControl.endTimeMinute,
        todayTask: formControl.todayTask
      }
      this.previewService.tasks.push(task);
    })
    // console.log(this.reportForm.value.todayTaskForms)
    // console.log(this.todayTaskForm.value.todayTask)
    // console.log(this.todayTaskForm.value.startTimeHour)
    // console.log(this.todayTaskForm.value.todayTask)
    this.previewService.todayLarnd = this.reportForm.value.todayLarnd;
    this.previewService.todayQuestion = this.reportForm.value.todayQuestion;
    this.previewService.todayIssue = this.reportForm.value.todayIssue
  }

}
