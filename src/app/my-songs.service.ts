import { Injectable } from '@angular/core';
import { Songs } from './songs';
@Injectable({
  providedIn: 'root'
})
export class MySongsService {

  loadMyData() : Songs[] {
    const MYSONGS: Songs[]  = 
          {sname: 'September', sartist: 'Earth, Wind & Fire', sgenre: 'Disco', 
            year: '1978',
            pic: 'september.jpeg'}
            
    return MYSONGS;
  }
  constructor() { }
}
