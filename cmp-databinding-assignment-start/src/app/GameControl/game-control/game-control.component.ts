import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() gameEvent = new EventEmitter<number>();
  counter:number = 0;
  ref;

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    
    this.ref = setInterval(() => {
      this.gameEvent.emit(this.counter+1);
      this.counter++;   
    }, 1000);

  }

  endGame() {
    clearInterval(this.ref);
  }

  
}
