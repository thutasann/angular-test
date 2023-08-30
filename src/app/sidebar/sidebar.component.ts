import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core'
import { BreakpointObserver } from '@angular/cdk/layout'

export interface IConversation {
  point: number
  image: string
  name: string
  date: string
  awardPoint: number
  message: string
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements AfterViewInit {
  hide: boolean = true
  viewMore: boolean = false

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

  converstaions: IConversation[] = [
    {
      point: 10,
      image: '../../assets/icons/person-three.png',
      name: 'Jhon S',
      date: '7:44 PM',
      awardPoint: 90,
      message: 'Lorem Ispum dummy text',
    },
    {
      point: 10,
      image: '../../assets/icons/person-three.png',
      name: 'Jhon S',
      date: '7:44 PM',
      awardPoint: 90,
      message: 'Lorem Ispum dummy text',
    },
    {
      point: 10,
      image: '../../assets/icons/person-three.png',
      name: 'Jhon S',
      date: '7:44 PM',
      awardPoint: 90,
      message: 'Lorem Ispum dummy text',
    },
    {
      point: 10,
      image: '../../assets/icons/person-three.png',
      name: 'Jhon S',
      date: '7:44 PM',
      awardPoint: 90,
      message: 'Lorem Ispum dummy text',
    },
    {
      point: 10,
      image: '../../assets/icons/person-three.png',
      name: 'Jhon S',
      date: '7:44 PM',
      awardPoint: 90,
      message: 'Lorem Ispum dummy text',
    },
    {
      point: 10,
      image: '../../assets/icons/person-three.png',
      name: 'Jhon S',
      date: '7:44 PM',
      awardPoint: 90,
      message: 'Lorem Ispum dummy text',
    },
  ]

  filteredConversations: IConversation[] = this.converstaions.slice(0, 4)

  handleViewMore(): void {
    this.viewMore = true
    this.filteredConversations = this.converstaions
  }

  handleViewLess(): void {
    this.viewMore = false
    this.filteredConversations = this.converstaions.slice(0, 4)
  }
}
