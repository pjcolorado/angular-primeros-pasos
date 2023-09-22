import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  //templateUrl: './name.component.html',
  //styleUrls: ['./name.component.scss']
  template: `<h2>Counter</h2>
    <button (click)="increaseBy(1)">+1</button>
    <label><b>{{counter}}</b></label>
    <button (click)="increaseBy(-1)">-1</button>
    <button (click)="reset()">Reset</button>
    `
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  decreaseBy(): void {
    this.counter -= 1;
  }

  reset() {
    this.counter = 10;
  }
}
