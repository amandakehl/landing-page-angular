import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  public window = innerWidth;
  public toggle: boolean = true;

  @Input() labelButton?: string;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.window = window.innerWidth
  }
}
