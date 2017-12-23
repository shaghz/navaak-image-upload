import { Component, ViewChild,OnInit, ElementRef } from '@angular/core';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})

export class UploadComponent  {
  currentState: string;
  states: string[];

  constructor() {
    this.states = [
      'uploadplace',
      'uploadhistory'
    ];

    this.currentState = this.states[0];
  }

  setState(state: string): void {
    this.currentState = state;
  }

  }
