import { Component } from '@angular/core';

@Component({
  selector: 'counter',
  template: `
    <h2 class="counter" > Counter {{ counter }} </h2>
    <button (click)="increment()" class="counter-button">Click</button>
  `,
  styles: [
    `
    .hello{
      color: blue;
    }
    .counter-button{
      color:grey;
    }
    `
  ]
})
export class CounterComponent{
  counter:number;
  increment(){
    if(this.counter==null){
      this.counter = 42;
    }
    this.counter = this.counter + 1;
  }
}