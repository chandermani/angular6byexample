
import {filter} from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';



@Component({
  selector: 'abe-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  private showHistoryLink = true;
  constructor(private router: Router) {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        this.showHistoryLink = !e.url.startsWith('/workout');
      });
  }

  ngOnInit() {
  }

}
