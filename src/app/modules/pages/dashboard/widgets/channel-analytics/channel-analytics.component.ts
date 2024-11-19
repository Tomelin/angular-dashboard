import { Component, ElementRef, viewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import Chart from 'chart.js/auto'
@Component({
  selector: 'app-channel-analytics',
  standalone: true,
  imports: [MatButton],
  templateUrl: './channel-analytics.component.html',
  styleUrl: './channel-analytics.component.scss'
})
export class ChannelAnalyticsComponent {

  chart = viewChild.required<ElementRef>('chart');

  ngOnInit() {
    new Chart(this.chart().nativeElement, {
      type: 'line',
      data: {
        labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        datasets: [
          {
            label: 'YouTube',
            data: [0, 100, 150, 200, 300, 400],
            borderColor: '#FF0000',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            fill: 'start'
          },
          {
            label: 'Facebook',
            data: [0, 50, 100, 150, 200, 250],
            borderColor: '#3b5998',
            fill: 'start'
          },
          {
            label: 'Instagram',
            data: [0, 10, 50, 100, 150, 200],
            borderColor: '#C13584',
            fill: 'start'
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        elements: {
          line: {
            tension: 0.4
          }
        }
      }

      
    })
    
  }
}
