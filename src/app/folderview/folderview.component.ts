import { Component, input } from '@angular/core';
import { Element } from '../services/music-service.service';

@Component({
  selector: 'app-folderview',
  standalone: true,
  imports: [],
  templateUrl: './folderview.component.html',
  styleUrl: './folderview.component.css'
})
export class FolderviewComponent {

  folders = input<Element[] | undefined>();

}
