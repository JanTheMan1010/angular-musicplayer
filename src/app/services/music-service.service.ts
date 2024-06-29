import { getNumberOfCurrencyDigits } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  getNum(): number {
    return Math.floor(Math.random() * 1000);
  }
}
