import { Component, Input, OnInit } from '@angular/core';
import { getCalendar, getNextDayPrice } from '@sc/core-utils';

@Component({
  selector: 'sc-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() percent: number = 1;
  @Input() now: number;
  @Input() nowprice: number;

  calendarData;

  constructor() {}

  ngOnInit(): void {
    this.genCalendar();
  }

  genCalendar() {
    let count = 100;
    let now = new Date(this.now);
    let _temp = new Date(this.now);
    let eventlist = [];
    let _tempprice = this.nowprice;

    eventlist = []
    for(let i = 1; i < count; i++) {
      if (_temp.getDay() !== 6 && _temp.getDay() !== 0) {
        _tempprice = getNextDayPrice(_tempprice, this.percent);
        eventlist.push(
          {
            start: new Date(_temp),
            end: new Date(_temp),
            title: _tempprice,
            color: ''
          }
        )
      }
      _temp.setDate(_temp.getDate() + 1);
    }
    this.calendarData = getCalendar(now.getFullYear(), now.getMonth(), eventlist);
  }

  headings = [
    {
      label: '日'
    },
    {
      label: '一'
    },
    {
      label: '二'
    },
    {
      label: '三'
    },
    {
      label: '四'
    },
    {
      label: '五'
    },
    {
      label: '六'
    }
  ]

}
