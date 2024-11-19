import { computed, Injectable, signal } from '@angular/core';
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
      rows: 4,
      columns: 2,
    },
    {
      id: 2,
      label: 'Views',
      content: ViewsComponent,
      rows: 2,
      columns: 2,
    },
  ]);

  addedWidgets = signal<IWidget[]>([]);

  widgetToAdd = computed(() => {
    const addedIds = this.addedWidgets().map((w) => w.id);
    return this.widgets().filter((w) => !addedIds.includes(w.id));
  });

  addWidget(w: IWidget) {
    this.addedWidgets.set([...this.addedWidgets(), { ...w }]);
  }

  updateWidget(id: number, widget: Partial<IWidget>) {
    const index = this.addedWidgets().findIndex((w) => w.id === id);
    if (index !== -1) {
      const newWidgets = [...this.addedWidgets()];
      newWidgets[index] = { ...newWidgets[index], ...widget };
      this.addedWidgets.set(newWidgets);
    }
  }

  moveWidgetToRight(id: number) {
    const index = this.addedWidgets().findIndex((w) => w.id === id);
    if (index === this.addedWidgets().length - 1) {
      return;
    }

    const newWidgets = [...this.addedWidgets()];
    [newWidgets[index], newWidgets[index + 1]] = [{...newWidgets[index + 1]}, {...newWidgets[index]}];

    this.addedWidgets.set(newWidgets);
  }

  moveWidgetToLeft(id: number) {
    const index = this.addedWidgets().findIndex((w) => w.id === id);
    if (index === 0) {
      return;
    }

    const newWidgets = [...this.addedWidgets()];
    [newWidgets[index], newWidgets[index - 1]] = [{...newWidgets[index - 1]}, {...newWidgets[index]}];

    this.addedWidgets.set(newWidgets);
  }

  constructor() {}
}
