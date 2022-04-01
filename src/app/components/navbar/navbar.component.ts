import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  // @HostListener('window:resize', ['$event'])
  // onResize(event: any) {
  //   if (event.innerWidth() < 1080) {

  //     console.log(event.toggle())
  //   } else {
  //     console.log(event.target.innerWidth);
  //   }
  // }
}