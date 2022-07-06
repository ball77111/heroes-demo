
import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
// 第三階段
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';




// 註冊在root 大家都可以用
// 以前是要用 app.modules   providers: [],注入才能用
@Injectable({
  providedIn: 'root'
})


export class HeroService {
  constructor(
    private messageService:MessageService
    ) { }


// 第二階段 不會這樣使用 只為了模擬 正常會從api接資料
// getHeroesByservice(): Hero[] {
//   return HEROES;
// }

// getHeroesAry: Hero[] = this.getHeroes();  用變數取得英雄資料


// 第三階段 回傳一個heros 用observable  與 of
// 正常是傳入api 然後是http格式

getHeroesByservice():Observable<Hero[]> {
  // this.messageService.add('HeroService: fetched heroes')
  return of(HEROES);
}


// getHeroes():Observable<Hero[]>{
//   this.messageService.add('HeroService: fetched heroes')
//   return of(HEROES)
// }


// 第三階段 一般使用狀態
// getHeroes(): Observable<Hero[]> {
//   const heroes = of(HEROES);
//   this.messageService.add('HeroService: fetched heroes');
//   return heroes;
// }





}



