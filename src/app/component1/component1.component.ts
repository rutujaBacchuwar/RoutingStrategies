import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit, OnChanges {

  constructor() { }
  
  @Input() inSourced;
  outSourceFromParent = "this is default"
  ngOnInit() {
  }
  
  ngOnChanges(data) {
    console.log(data)
  }
  parentMethod(data) {
    this.outSourceFromParent = data
    console.log(data, "this is the data in Parent")
  }
}
