import { Component } from '@angular/core'

@Component({
  selector: 'app-profile-section',
  templateUrl: './profile-section.component.html',
  styleUrls: ['./profile-section.component.css'],
})
export class ProfileSectionComponent {
  activeState: 'profile' | 'about-me' = 'profile'

  points = [90, 50, 30, 10]

  handleChange(state: 'profile' | 'about-me') {
    this.activeState = state
  }
}
