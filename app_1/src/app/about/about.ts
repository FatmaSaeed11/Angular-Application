import { Component } from '@angular/core';
import { text } from 'express';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  string_1:string='abcd';
  age:number=25;
  imgSource:string='assets/imgs/im.jpg';
  active:boolean=false;

  sayHello(){
     console.log('hello from about us page');
  }
  printInConsole(e:KeyboardEvent){
    const inputField=e.target as HTMLInputElement;
    console.log(inputField.value);
  }
}
