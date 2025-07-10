import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  collapsed = true;
  closeX = false;

  menuItems = [
    {
      label: 'Home',
      route: '',
    },
    {
      label: 'Contacto',
      route: '/contacto',
    },
  ]

  collapseMenu() {
    this.collapsed = !this.collapsed;
    this.closeX = !this.closeX;
  }
}
