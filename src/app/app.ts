import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './pages/layout/footer/footer';
import { Nav } from './pages/layout/nav/nav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Nav],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'davidark31';
  nombre:string="david";
}
