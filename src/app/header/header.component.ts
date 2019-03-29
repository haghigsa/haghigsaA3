import { Component, OnInit, Input } from '@angular/core';
import { Haghigsa } from '../haghigsa';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() headInfo: Haghigsa;
  constructor() { }

  ngOnInit() {
  }

}
