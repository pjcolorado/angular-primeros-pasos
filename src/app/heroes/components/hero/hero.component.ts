import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizeName(): string {
    return this.name.toLocaleUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age} años`;
  }

  changeHero(): void {
    this.name = 'SpiderMan'
  }

  changeAge(): void {
    this.age = 18
  }

  reset():void{
    this.name  = 'ironman';
    this.age = 45;
  }

}
