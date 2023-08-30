import { Component } from '@angular/core'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isSidebarOpen = false

  constructor() {}

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen
  }
}
