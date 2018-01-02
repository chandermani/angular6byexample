import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'abe-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showHistoryLink: boolean = true;
  private subscription: any;
  
  constructor(private router: Router) {
    this.router.events.subscribe((data: RouterEvent) => {
      this.showHistoryLink = !this.router.url.startsWith('/workout');
    });
  }

  ngOnInit() {
  }

  

}
