import { Injectable, signal } from '@angular/core';
import { IWidget } from '../../interfaces/widget/widget';
import { SubscribersComponent } from '../../pages/dashboard/widgets/subscribers/subscribers.component';
import { ViewsComponent } from '../../pages/dashboard/widgets/views/views.component';

// @Injectable({
//   providedIn: 'root',
// })
@Injectable()

export class DashboardService {
  widgets = signal<IWidget[]>([
    {
      id: 1,
      label: 'Subscribers',
      content: SubscribersComponent,
    },
    {
      id: 2,
      label: 'Views',
      content: ViewsComponent,
    },
  ]);

  constructor() {}
}


