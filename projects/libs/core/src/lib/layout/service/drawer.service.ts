import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DrawerService {

  private _$opened = new BehaviorSubject<boolean>(false);

  get $opened(): BehaviorSubject<boolean> {
    return this._$opened;
  }
}
