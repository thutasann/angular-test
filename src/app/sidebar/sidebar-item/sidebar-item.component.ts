import { Component, Input } from '@angular/core'
import { IConversation } from '../sidebar.component'

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.css'],
})
export class SidebarItemComponent {
  @Input() conversation!: IConversation
}
