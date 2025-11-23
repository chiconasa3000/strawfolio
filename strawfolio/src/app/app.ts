import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfile } from './user-profile/user-profile';
import { signal, computed } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserProfile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('strawfolio');
}
