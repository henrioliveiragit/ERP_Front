import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeletorService implements OnInit{

  constructor() { }

  data = {}
 
  ngOnInit(): void {
    
  }

  storeData(obj: any)
  {
    this.data = obj
  }

  retrieveData()
  {
    return this.data
  }





}
