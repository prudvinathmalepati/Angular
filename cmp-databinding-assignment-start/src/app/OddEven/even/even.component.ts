import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styles: [`
            strong  {
              color : Green;
            }
    `]
})
export class EvenComponent implements OnInit {
  @Input() number : number;
  constructor() { }

  ngOnInit() {
  }

}
