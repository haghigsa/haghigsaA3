import { Component, OnInit, Input } from '@angular/core';
import { Haghigsa } from '../haghigsa';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() footInfo: Haghigsa;
  constructor() { }

  ngOnInit() {
  }

}
