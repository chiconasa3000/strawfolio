import { Component } from '@angular/core';
import { UserBiography } from '../user-biography/user-biography';
import { ProfilePhoto } from '../profile-photo/profile-photo';
@Component({
  selector: 'app-user-profile',
  imports: [UserBiography,ProfilePhoto],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {

}
