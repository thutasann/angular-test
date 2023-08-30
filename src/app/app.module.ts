import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NavbarComponent } from './navbar/navbar.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { SidebarItemComponent } from './sidebar/sidebar-item/sidebar-item.component'
import { MessagesComponent } from './messages/messages.component'
import { NgOptimizedImage } from '@angular/common';
import { MessageHeaderComponent } from './messages/message-header/message-header.component';
import { RightBarComponent } from './right-bar/right-bar.component';
import { ProfileSectionComponent } from './right-bar/profile-section/profile-section.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SidebarItemComponent,
    MessagesComponent,
    MessageHeaderComponent,
    RightBarComponent,
    ProfileSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgOptimizedImage,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
