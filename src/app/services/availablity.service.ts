import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvailablityService {

  avaliblity = new BehaviorSubject({name:'apple',availablity:50});
  constructor() { }

}
