import { Component } from '@angular/core';
import { IntroService } from './intro.service';
@Component({
  selector: 'app-user-biography',
  imports: [],
  templateUrl: './user-biography.html',
  styleUrl: './user-biography.css',
})
export class UserBiography {
  constructor(public introService: IntroService){}

  loadNewProjects(){
    this.introService.setProjectCount(20);
  }

}
