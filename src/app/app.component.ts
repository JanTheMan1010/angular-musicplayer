import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayerComponent } from './player/player.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlayerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {


readonly urls = [
  "https://upload.wikimedia.org/wikipedia/commons/7/76/De-MP3.ogg",
];

  title = 'angular-musicplayer';

  url = signal<undefined | string>(undefined);

  constructor() {
    this.randomize();
  }

  randomize(): void {
    const idx = Math.floor(Math.random() * (this.urls.length - 1));
    this.url.set(this.urls[idx]);
  }
}
