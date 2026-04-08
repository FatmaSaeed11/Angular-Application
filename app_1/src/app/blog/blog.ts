import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  imports: [CommonModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  friends:string[]=['ahmed','mohamed','sayed'];
  isActive:boolean=true;
  ay:number=2;
  str:string='angular';

}
