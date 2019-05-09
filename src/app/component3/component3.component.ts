import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit, OnChanges {

  constructor() { }
  @Input() inSourced;
  ngOnInit() {
  }
  ngOnChanges(data) {
    console.log(data.inSourced, "soo the data has reached the siblig")
  }

}
