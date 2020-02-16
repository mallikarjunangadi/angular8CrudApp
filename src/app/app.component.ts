import { Component } from '@angular/core';
import { SlimLoadingBarService } from "ng2-slim-loading-bar";
import { NavigationStart, NavigationEnd, NavigationError, NavigationCancel, Event, Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meanStackRevision';

  constructor(private loadingBar: SlimLoadingBarService, private router: Router) {
    this.router.events.subscribe((event: Event) => this.navigationInterceptor(event));
  }

  private navigationInterceptor(event: Event): void {
    if(event instanceof NavigationStart) this.loadingBar.start();

    if(event instanceof NavigationEnd) this.loadingBar.complete();

    if(event instanceof NavigationCancel) this.loadingBar.stop();

    if(event instanceof NavigationEnd) this.loadingBar.stop();
  }

}
