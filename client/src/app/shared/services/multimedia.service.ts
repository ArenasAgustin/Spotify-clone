import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
  play$: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
