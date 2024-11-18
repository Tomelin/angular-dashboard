import { Component, inject } from '@angular/core';
import { WidgetComponent } from '../../components/dashboard/widget/widget.component';
import { DashboardService } from '../../services/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [WidgetComponent],
  providers: [DashboardService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
store = inject(DashboardService)
}
