import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  scrolling: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolling = document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
      ? true
      : false
  }
}
