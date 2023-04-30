import { Component, OnInit } from '@angular/core';
import { MatCalendarCellClassFunction, MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { DATAS_OCUPADAS } from './datas-ocupadas';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  selected = DATAS_OCUPADAS

  selectedDate: Date = new Date();

  selectedDates: Date[] = [new Date(2023, 3, 15), new Date(2023, 3, 17)];


  constructor() {}

  ngOnInit() {
    console.log(this.selected)
  }


}
