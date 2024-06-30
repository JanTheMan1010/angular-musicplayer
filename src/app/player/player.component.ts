import { Component, Input, effect, input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BehaviorSubject, filter } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Element } from '../services/music-service.service';


@Component({
  selector: 'app-player',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {

  cnt = 0;
  url$ = new BehaviorSubject<Element | undefined>(undefined);

  @Input()
  set url(value: Element | undefined){
     this.url$.next(value);
  }

  additionalInfo = input.required<number | undefined>();
  
  constructor(){
    this.url$.pipe(takeUntilDestroyed(), filter((val: any)=> val !== undefined))
    .subscribe((val: Element | undefined)=>
      console.log(`new value: ${val?.name} / ${val?.path}`)
    );

  }

}
