import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreviewService {

  startTimeHour: number
  startTimeMinute: number
  todayTask: string
  todayLarnd: string
  todayQuestion: string
  todayIssue: string
  constructor() { }
}
