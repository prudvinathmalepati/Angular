import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
          .myClass {
            color : white;
          }
          `]
})
export class AppComponent {
  
  display : String = "block";
  buttonClicks = [];
  count  = 0;

  getDisplay() {
    return this.display;
  }

  toggleDisplay() {
    this.count = this.count + 1;
    this.buttonClicks.push(this.count);
    this.display = this.display === "none" ? "block" : "none";
  }

  getColor(val) {
    return val > 4 ? "blue" : "white";
  }
}
