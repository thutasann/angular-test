import { BreakpointObserver } from '@angular/cdk/layout'
import { ChangeDetectorRef, Component } from '@angular/core'

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

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen
  }
}
