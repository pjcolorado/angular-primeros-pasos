import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { HeroComponent } from './components/hero/hero.component';
import { ListComponent } from './components/list/list.component';
import { MainPageComponent } from './pages/main-page/main-page.component';


@NgModule({
  declarations: [
    HeroComponent,
    ListComponent,
    MainPageComponent
  ],
  exports: [
    HeroComponent,
    ListComponent,
    MainPageComponent
  ],
  imports:[
    CommonModule
  ]
})
export class HeroesModule { }
