import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreviewService {

  startTimeHour: number
  startTimeMinute: number
  endTimeHour: number
  endTimeMinute: number
  todayTask: string
  todayLarnd: string
  todayQuestion: string
  todayIssue: string
  value: any;
  constructor() { }
}
