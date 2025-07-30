import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class Nav {
  constructor(private readonly r: Router) {}

  irAHome() {
    this.r.navigate(['']);
  }

    irAContact() {
    this.r.navigate(['contact']);
  }
}
