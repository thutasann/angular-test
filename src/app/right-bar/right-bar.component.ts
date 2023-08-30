import { BreakpointObserver } from '@angular/cdk/layout'
import { ChangeDetectorRef, Component } from '@angular/core'

@Component({
  selector: 'app-right-bar',
  templateUrl: './right-bar.component.html',
  styleUrls: ['./right-bar.component.css'],
})
export class RightBarComponent {
  hide: boolean = true

  constructor(
    private observer: BreakpointObserver,
    private dir: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.hide = true
    this.observer.observe(['(max-width:1000px)']).subscribe(res => {
      if (res?.matches) {
        this.hide = true
      } else {
        this.hide = false
      }
    })
    this.dir.detectChanges()
  }
}
