import { Component, OnInit } from '@angular/core';
import { PreviewService } from '../preview.service';
import { ClipboardService } from 'ngx-clipboard';

interface TaskData {
  startTimeHour: string;
  startTimeMinute: string;
  endTimeHour: string;
  endTimeMinute: string;
  todayTask: string;
}

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  tasks: TaskData[] = [];
  todayLarnd: string
  todayQuestion: string
  todayIssue: string
  value: any
  report: string
  taskStr: string;

  constructor(private previewService: PreviewService,private _clipboardService: ClipboardService) { }

  ngOnInit(): void {
    this.taskStr = "本日の作業\n"
    this.tasks = this.previewService.tasks
    this.tasks.forEach(task => {
      this.taskStr = this.taskStr + task.startTimeHour + ":" + task.startTimeMinute + "〜" + task.endTimeHour + ":" + task.endTimeMinute + task.todayTask + "\n"
    })
    console.log(this.taskStr)
    this.todayLarnd = this.previewService.todayLarnd
    this.todayQuestion = this.previewService.todayQuestion
    this.todayIssue = this.previewService.todayIssue
    this.taskStr = this.taskStr + "\n"　+ "今日学んだこと" + "\n" + this.todayLarnd + "\n" + "疑問点" + "\n" + this.todayQuestion + "\n" + "課題点" + "\n" + this.todayIssue
    this.report = this.taskStr
  }

  callServiceToCopy(text) {
    this._clipboardService.copyFromContent(text);
  }

}
