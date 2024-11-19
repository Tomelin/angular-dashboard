import { Component, inject, input, Input, model } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { IWidget } from '../../../../interfaces/widget/widget';
import { DashboardService } from '../../../../services/dashboard/dashboard.service';

@Component({
  selector: 'app-widget-options',
  standalone: true,
  imports: [MatButtonModule, MatIcon, MatButtonToggleModule],
  templateUrl: './widget-options.component.html',
  styleUrl: './widget-options.component.scss'
})
export class WidgetOptionsComponent {
  data = input.required<IWidget>();

  showOptions = model<boolean>(false);

  store = inject(DashboardService);
}
