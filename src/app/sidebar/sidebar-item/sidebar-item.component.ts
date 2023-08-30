import { Component, Input, OnInit } from '@angular/core'
import { IConversation } from '../sidebar.component'

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.css'],
})
export class SidebarItemComponent implements OnInit {
  @Input() conversation!: IConversation

  showOptions: boolean = false

  ngOnInit(): void {
    console.log(this.showOptions)
  }

  show(): void {
    this.showOptions = true
    console.log('this.showOpeionts', this.showOptions)
  }

  hide(): void {
    this.showOptions = false
  }
}
