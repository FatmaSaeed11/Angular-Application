import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { About } from './about/about';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , NavbarComponent,About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app_1');
}
