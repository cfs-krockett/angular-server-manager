import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { ServerStatusComponent } from './server-status/server-status.component';
import { DUMMY_TRAFFIC_DATA } from './dummy-traffic-data';
import { TrafficStatusComponent } from "./traffic-status/traffic-status.component";
import { SupportTicketsComponent } from "./support-tickets/support-tickets.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [NavbarComponent, ServerStatusComponent, TrafficStatusComponent, SupportTicketsComponent]
})
export class AppComponent {
  dummyTrafficData = DUMMY_TRAFFIC_DATA;

  maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value));
  currentStatus = 'online';
}
