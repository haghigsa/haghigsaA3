import { Component, OnInit, Input } from '@angular/core';
import { Songs } from '../songs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input () detail: Songs;
  songs: string[]=['September', 'August', 'June', 'July'];
  song: string;
  changePara(index) {
    this.song = document.getElementsByTagName("button")[index].innerText;
  }
  constructor() { }

  ngOnInit() {
  }

}
