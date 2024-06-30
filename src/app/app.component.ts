import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayerComponent } from './player/player.component';
import { FolderviewComponent } from './folderview/folderview.component';
import { Content, Element, MusicService
 } from './services/music-service.service';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlayerComponent, FolderviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  readonly urls = [
    "https://upload.wikimedia.org/wikipedia/commons/7/76/De-MP3.ogg",
  ];

asdfwert: any;

  title = 'angular-musicplayer';

  selectedFile = signal<Element | undefined>(undefined);

  currentPath = signal("/");
  content = signal<Content | undefined>(undefined);
  
  constructor(private musicSrv: MusicService) {
    toObservable(this.currentPath)
    .pipe(takeUntilDestroyed(), filter(val => val !== undefined))
    .subscribe(async (src: string)=> {
      this.content.set(await this.musicSrv.getContent(src))
      this.selectedFile.set(this.content()?.files?.[0]);
    });
  }
    
}
