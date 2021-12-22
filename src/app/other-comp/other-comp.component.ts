import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import {MatDialog} from '@angular/material/dialog'

@Component({
  selector: 'app-other-comp',
  templateUrl: './other-comp.component.html',
  styleUrls: ['./other-comp.component.css']
})
export class OtherCompComponent implements OnInit {

  constructor(public closing:MatDialog) { }

  @Output() childDivOpen:EventEmitter<any> = new EventEmitter<any>();

  @Input() showChild:any;

  ngOnInit(): void {

  }

  close(){

      this.childDivOpen.emit(this.closing.closeAll()) 

  }

}
