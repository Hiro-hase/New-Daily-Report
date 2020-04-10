import { Injectable } from '@angular/core';

interface TaskData {
  startTimeHour: string;
  startTimeMinute: string;
  endTimeHour: string;
  endTimeMinute: string;
  todayTask: string;
}

@Injectable({
  providedIn: 'root'
})

export class PreviewService {
  tasks: TaskData[] = [];
  startTimeHour: number;
  startTimeMinute: number;
  endTimeHour: number;
  endTimeMinute: number;
  todayTask: string;
  todayLarnd: string
  todayQuestion: string
  todayIssue: string
  value: any;
  constructor() { }
}
