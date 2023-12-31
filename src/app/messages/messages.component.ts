import { BreakpointObserver } from '@angular/cdk/layout'
import { ChangeDetectorRef, Component } from '@angular/core'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent {
  hide: boolean = true

  constructor(
    private observer: BreakpointObserver,
    private dir: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.hide = true
    this.observer.observe(['(max-width:800px)']).subscribe(res => {
      if (res?.matches) {
        this.hide = true
      } else {
        this.hide = false
      }
    })
    this.dir.detectChanges()
  }
}
