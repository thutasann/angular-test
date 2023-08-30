import { Component, Input } from '@angular/core'
import { IConversation } from '../sidebar.component'

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.css'],
})
export class SidebarItemComponent {
  @Input() conversation!: IConversation

  showOptions: boolean = false

  show(): void {
    this.showOptions = true
  }

  hide(): void {
    this.showOptions = false
  }
}
