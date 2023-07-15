import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shell';

  sendDataToContact() {
    const customEvent = new CustomEvent('customEvent', {detail: "test"});

    document.dispatchEvent(customEvent);
  }
}
