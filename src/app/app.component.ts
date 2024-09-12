import { Component } from '@angular/core';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { TrafficStatusComponent } from "./dashboard/traffic/traffic-status.component";
import { SupportTicketsComponent } from "./dashboard/tickets/support-tickets.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [NavbarComponent, ServerStatusComponent, TrafficStatusComponent, SupportTicketsComponent]
})
export class AppComponent {
}
