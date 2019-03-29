import { Component } from '@angular/core';
import { Haghigsa } from './haghigsa';
import { PersonaldataService } from './personaldata.service';
import { Songs } from './songs';
import { MySongsService } from './my-songs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'haghigsaA3';
  songs: Songs[];
  myInfo: Haghigsa;
  constructor(private pservice: PersonaldataService, private songservice: MySongsService) {}

  loadMyPersonalData (): void{
    this.myInfo = this.pservice.loadMyData();
    this.songs = this.songservice.loadMyData();
  }



  ngOnInit () { this.loadMyPersonalData(); }
}
