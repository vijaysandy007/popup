
import { Component, OnInit } from '@angular/core';
import { MatDialog } from  '@angular/material/dialog'
import { showStateTrigger } from 'animation';

import { OtherCompComponent } from './other-comp/other-comp.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    showStateTrigger
  ]
})
export class AppComponent implements OnInit {

  title = 'popup';
  openComps:boolean = false
  blockBtn: boolean = false;
  showChild: boolean = false;


  div1:boolean = false
  div2:boolean = false
  div3:boolean = false

  constructor(public getComp: MatDialog) { }

  ngOnInit(): void {
   
   
  }
  
  openComp() {

    this.blockBtn = true;

    if(this.getComp.open(OtherCompComponent)){
      this.showChild = true;
    }
   
  }

  childDivOpen(event: any) {

    if (event == event) {  
      this.blockBtn = false;

      this.openComps = false;
    } 

    console.log(event);
  }
}
