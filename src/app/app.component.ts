import { BreakpointObserver } from '@angular/cdk/layout'
import { ChangeDetectorRef, Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'genesiv-test'

  hide: boolean = true

  constructor(
    private observer: BreakpointObserver,
    private dir: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.hide = true
    this.observer.observe(['(max-width:1200px)']).subscribe(res => {
      if (res?.matches) {
        this.hide = true
      } else {
        this.hide = false
      }
    })
    this.dir.detectChanges()
  }
}
