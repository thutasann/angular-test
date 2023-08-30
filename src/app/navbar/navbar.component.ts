import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core'
import { BreakpointObserver } from '@angular/cdk/layout'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isSidebarOpen = false

  constructor(
    private observer: BreakpointObserver,
    private dir: ChangeDetectorRef
  ) {}

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen
  }

  ngAfterViewInit(): void {
    this.isSidebarOpen = true
    this.observer.observe(['(max-width:800px)']).subscribe(res => {
      if (res?.matches) {
        this.isSidebarOpen = true
      } else {
        this.isSidebarOpen = false
      }
    })
    this.dir.detectChanges()
  }
}
