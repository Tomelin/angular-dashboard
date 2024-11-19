import { computed, effect, Injectable, signal } from '@angular/core';
import { IWidget } from '../../interfaces/widget/widget';
import { SubscribersComponent } from '../../pages/dashboard/widgets/subscribers/subscribers.component';
import { ViewsComponent } from '../../pages/dashboard/widgets/views/views.component';
import { WatchTimeComponent } from '../../pages/dashboard/widgets/watch-time/watch-time.component';
import { RevenueComponent } from '../../pages/dashboard/widgets/revenue/revenue.component';
import { ChannelAnalyticsComponent } from '../../pages/dashboard/widgets/channel-analytics/channel-analytics.component';

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
      rows: 1,
      columns: 1,
      backgroundColor: '#003f5c',
      color: 'whitesmoke',
    },
    {
      id: 2,
      label: 'Views',
      content: ViewsComponent,
      rows: 1,
      columns: 1,
      backgroundColor: '#003f5c',
      color: 'whitesmoke',
    },
    {
      id: 3,
      label: 'Watch Time',
      content: WatchTimeComponent,
      rows: 1,
      columns: 1,
      backgroundColor: '#003f5c',
      color: 'whitesmoke',
    },
    {
      id: 4,
      label: 'Revenue',
      content: RevenueComponent,
      rows: 1,
      columns: 1,
      backgroundColor: '#003f5c',
      color: 'whitesmoke',
    },
    {
      id: 5,
      label: 'Channel Analytics',
      content: ChannelAnalyticsComponent,
      rows: 2,
      columns: 2,
      // backgroundColor: '#003f5c',
      // color: 'whitesmoke',
    },
  ]);

  addedWidgets = signal<IWidget[]>([]);

  widgetToAdd = computed(() => {
    const addedIds = this.addedWidgets().map((w) => w.id);
    return this.widgets().filter((w) => !addedIds.includes(w.id));
  });

  fetchWidgets() {
    const widgetsAsString  = localStorage.getItem('dashboardWidgets');
    if(widgetsAsString) {
      const widgets = JSON.parse(widgetsAsString) as IWidget[];
      widgets.forEach((w) => {
        const content = this.widgets().find((widget) => widget.id === w.id)?.content;
        if (content) {
          w.content = content;
        }
      })
      this.addedWidgets.set(widgets);
    }
  }

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
    [newWidgets[index], newWidgets[index + 1]] = [
      { ...newWidgets[index + 1] },
      { ...newWidgets[index] },
    ];

    this.addedWidgets.set(newWidgets);
  }

  moveWidgetToLeft(id: number) {
    const index = this.addedWidgets().findIndex((w) => w.id === id);
    if (index === 0) {
      return;
    }

    const newWidgets = [...this.addedWidgets()];
    [newWidgets[index], newWidgets[index - 1]] = [
      { ...newWidgets[index - 1] },
      { ...newWidgets[index] },
    ];

    this.addedWidgets.set(newWidgets);
  }

  removeWidget(id: number) {
    this.addedWidgets.set(this.addedWidgets().filter((w) => w.id !== id));
  }

  constructor() {
    this.fetchWidgets();
  }

  saveWidgets = effect(() => {
    const widgetsWithoutContent: Partial<IWidget>[] = this.addedWidgets().map((w) => ({...w}));
    widgetsWithoutContent.forEach((w) => {
      delete w.content;
    });

    localStorage.setItem('dashboardWidgets', JSON.stringify(widgetsWithoutContent));
  });
}
