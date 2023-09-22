import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['SpiderMan', 'IronMan', 'Hulk', 'Thor', 'AntMan'];
  public deletedHero: string = '';

  removeLastHeroe(): void {
      this.deletedHero = this.heroNames.pop() || '';
  }

  resetList(): void{
    this.heroNames =  ['SpiderMan', 'IronMan', 'Hulk', 'Thor', 'AntMan'];
  }
}
