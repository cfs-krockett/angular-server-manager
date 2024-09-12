import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-traffic-status',
  standalone: true,
  imports: [],
  templateUrl: './traffic-status.component.html',
  styleUrl: './traffic-status.component.css',
})
export class TrafficStatusComponent {
  @Input() dummyTrafficData!: { id: string; value: number }[];
  @Input() maxTraffic!: number;
}
