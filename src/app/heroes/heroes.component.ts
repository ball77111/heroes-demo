import { MessageService } from './../message.service';
import { HeroService } from './../hero.service';

import { Component, OnInit } from '@angular/core';

// 使用Hero 型態  unterface
import { Hero } from './../hero';

// 假資料
// import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // 第一階段 自己創建假資料
  // heroes = HEROES;

  selectedHero?: Hero;   //創建選擇到的英雄變數
  // 第二階段 現在要撈service資料
  heroes?: Hero[]


  constructor(private heroService: HeroService,
      private messageService:MessageService
    ) { }

  ngOnInit(): void {
    // 第二階段 初始就要先載入英雄資料
    this.getHeroesByComponentFun()
    // this.heroesGo();
  }

  //選擇到的英雄存入selectedHero
  onSelect(hero: Hero): void {
    console.log(hero);
    this.selectedHero = hero;
    this.messageService.messages.push(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  // heroesGo(): void {
  //   this.heroService.getHeroes().subscribe(heroesList =>  {
  //     this.heroes = heroesList;
  //   });
  // }

  // 第二階段加入service 接資料的方法
  // getHeroesByComponentFun():void{
  //   this.heroes = this.heroService.getHeroesByservice();
  // }

  //第三階段使用observable(可觀察的) 接收資料用 subscribe(訂閱)
  getHeroesByComponentFun(): void {
    this.heroService.getHeroesByservice()
      .subscribe(
        res => {
          console.log('資料成功接收');
          this.heroes = res
        },
        err => {
          console.log('資料找不到');
        }
      );
    // (err => console.error('資料未連結');
  }

  // getHeroes(): void {
  //   this.heroService.getHeroes()
  //       .subscribe(heroes => this.heroes = heroes);
  // }
}
