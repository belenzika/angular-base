import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number =  45;

  get capitalizedName():string {
     return this.name.toUpperCase();
  }

  public getHeroDescription():string {
    return `${ this.name } - ${ this.age }`;
  }

  public changeHero(): void {
    this.name = 'Hulk';
  }

  public changeAge() : void {
    this.age = 32;
  }

  public reset() : void {
    this.name= 'ironman';
    // document.querySelectorAll('h1')!.forEach(element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>';
    // })
    this.age = 45;
  }
}
