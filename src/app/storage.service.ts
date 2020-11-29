import { Injectable } from '@angular/core';

export class StorageService {

  constructor() { }
}
@Injectable()
export class BrowserStorage{
  localStorage = localStorage;
  setItem<T>(key:string, value:T):T{
    this.localStorage.setItem(key, JSON.stringify(value));
    return value;
  }
  getItem<T>(key:string):T{
    let item;
    //try{
      item = JSON.parse(this.localStorage.getItem(key))
    //}
    //catch{
    //  item = this.localStorage.getItem(key);
    //}
    return item;
  }
  removeItem(key:string):void{
    this.localStorage.removeItem(key);
  }
  
}