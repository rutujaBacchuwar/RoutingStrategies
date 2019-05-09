import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor() { }
  
  count = 0;
  @Output() outSource = new EventEmitter();

  ngOnInit() {
  }
  myMethod() {
    console.log(this.count)
    this.outSource.emit(this.count);
    this.count ++
  }
}
