import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from "./nav/nav.component";
import { Footer } from "./footer/footer.component";

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, Nav, Footer],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
