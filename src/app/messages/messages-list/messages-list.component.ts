import { Component, Input, OnInit } from '@angular/core'

export interface IMessage {
  image: string
  name: string
  time: string
  mesasge: string
  isOwn: boolean
  isOld?: boolean
}

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css'],
})
export class MessagesListComponent implements OnInit {
  @Input() isOld!: boolean

  messages: IMessage[] = [
    {
      image: '../../assets/icons/person.png',
      name: 'John Doe',
      time: '3:20pm',
      mesasge:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, recusandae. Dolorem eum, adipisci laudantium, sequi, doloribus deleniti commodi nemo iure tenetur repellendus corporis laborum. Ut non neque quasi ipsum quae!',
      isOwn: false,
      isOld: true,
    },
    {
      image: '../../assets/icons/person-three.png',
      name: 'Frank Cena',
      time: '3:20pm',
      mesasge:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, recusandae. Dolorem eum, adipisci laudantium, sequi, doloribus deleniti commodi nemo iure tenetur repellendus corporis laborum. Ut non neque quasi ipsum quae!',
      isOwn: true,
      isOld: true,
    },
    {
      image: '../../assets/icons/person.png',
      name: 'John Doe',
      time: '3:20pm',
      mesasge:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, recusandae. Dolorem eum, adipisci laudantium, sequi, doloribus deleniti commodi nemo iure tenetur repellendus corporis laborum. Ut non neque quasi ipsum quae!',
      isOwn: false,
      isOld: false,
    },
    {
      image: '../../assets/icons/person-three.png',
      name: 'Frank Cena',
      time: '3:20pm',
      mesasge:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, recusandae. Dolorem eum, adipisci laudantium, sequi, doloribus deleniti commodi nemo iure tenetur repellendus corporis laborum. Ut non neque quasi ipsum quae!',
      isOwn: true,
      isOld: false,
    },
    {
      image: '../../assets/icons/person.png',
      name: 'John Doe',
      time: '3:20pm',
      mesasge:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, recusandae. Dolorem eum, adipisci laudantium, sequi, doloribus deleniti commodi nemo iure tenetur repellendus corporis laborum. Ut non neque quasi ipsum quae!',
      isOwn: false,
      isOld: false,
    },
    {
      image: '../../assets/icons/person-three.png',
      name: 'Frank Cena',
      time: '3:20pm',
      mesasge:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, recusandae. Dolorem eum, adipisci laudantium, sequi, doloribus deleniti commodi nemo iure tenetur repellendus corporis laborum. Ut non neque quasi ipsum quae!',
      isOwn: true,
    },
    {
      image: '../../assets/icons/person.png',
      name: 'John Doe',
      time: '3:20pm',
      mesasge:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, recusandae. Dolorem eum, adipisci laudantium, sequi, doloribus deleniti commodi nemo iure tenetur repellendus corporis laborum. Ut non neque quasi ipsum quae!',
      isOwn: false,
      isOld: false,
    },
    {
      image: '../../assets/icons/person-three.png',
      name: 'Frank Cena',
      time: '3:20pm',
      mesasge:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, recusandae. Dolorem eum, adipisci laudantium, sequi, doloribus deleniti commodi nemo iure tenetur repellendus corporis laborum. Ut non neque quasi ipsum quae!',
      isOwn: true,
    },
    {
      image: '../../assets/icons/person.png',
      name: 'John Doe',
      time: '3:20pm',
      mesasge:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, recusandae. Dolorem eum, adipisci laudantium, sequi, doloribus deleniti commodi nemo iure tenetur repellendus corporis laborum. Ut non neque quasi ipsum quae!',
      isOwn: false,
      isOld: false,
    },
    {
      image: '../../assets/icons/person-three.png',
      name: 'Frank Cena',
      time: '3:20pm',
      mesasge:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, recusandae. Dolorem eum, adipisci laudantium, sequi, doloribus deleniti commodi nemo iure tenetur repellendus corporis laborum. Ut non neque quasi ipsum quae!',
      isOwn: true,
      isOld: false,
    },
    {
      image: '../../assets/icons/person.png',
      name: 'John Doe',
      time: '3:20pm',
      mesasge:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, recusandae. Dolorem eum, adipisci laudantium, sequi, doloribus deleniti commodi nemo iure tenetur repellendus corporis laborum. Ut non neque quasi ipsum quae!',
      isOwn: false,
      isOld: false,
    },
    {
      image: '../../assets/icons/person-three.png',
      name: 'Frank Cena',
      time: '3:20pm',
      mesasge:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, recusandae. Dolorem eum, adipisci laudantium, sequi, doloribus deleniti commodi nemo iure tenetur repellendus corporis laborum. Ut non neque quasi ipsum quae!',
      isOwn: true,
      isOld: false,
    },
  ]

  filteredMessages: IMessage[] = []

  ngOnInit(): void {
    this.filteredMessages = this.isOld
      ? this.messages.slice(0, 1)
      : this.messages
  }
}
