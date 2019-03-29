import { Injectable } from '@angular/core';
import { Haghigsa } from './haghigsa';
@Injectable({
  providedIn: 'root'
})
export class PersonaldataService {

  loadMyData() : Haghigsa {
    const MYINFO: Haghigsa = 
          {sid: 991455311, sname: 'Saam H', slogin: 'haghigsa', 
            scampus: 'Davis',
            stitle: 'Assignment 3'}
    return MYINFO;
  }
  
  constructor() { }
  
}
