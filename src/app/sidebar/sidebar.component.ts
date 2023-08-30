import { Component } from '@angular/core'

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
export class SidebarComponent {
  sidenav: boolean = true

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
  ]
}
