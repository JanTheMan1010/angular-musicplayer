import { Component, Input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BehaviorSubject, filter } from 'rxjs';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-player',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {

  // url = input<string>();
  cnt = 0;
  url$ = new BehaviorSubject<string | undefined>(undefined);

  @Input()
  set url(value: any){
     this.url$.next(value);
  }

  constructor(){
    this.url$.pipe(takeUntilDestroyed(), filter((val: any)=> val !== undefined))
    .subscribe((val: string | undefined)=>
      console.log(`new value: ${val}`)
    );
    // effect(()=>{
    //   const url = this.url();
    //    console.log("new url", url);
    // });
  }

}
