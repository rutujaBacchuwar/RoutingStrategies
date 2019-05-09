import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thirdApp';
  myvar = "routeParam"
  constructor(private route: Router) {
  
  }
  route1 () {
    console.log("this is getting executed")
    this.route.navigate([`/xyz/${this.myvar}`, {queryParams : {optionalId: "this-is-my-optionalId "}}]);

  }
  route2() {
    this.route.navigate(['/abc'], {queryParams : {optionalId: "this-is-my-optionalId "}})
  }
}
