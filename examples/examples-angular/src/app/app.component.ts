import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { render } from '@engagespot/client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  @ViewChild('engagespotBellIcon') engagespotBellIcon: ElementRef;

  ngAfterViewInit() {
    render(this.engagespotBellIcon.nativeElement, {
      apiKey: 'od9t6x45udt1m3g0nznag',
      userId: 'hemanditwiz@gmail.com',
      theme: {}, //Theme Object to Customize the look and feel of the notification inbox.
    });
  }
}
