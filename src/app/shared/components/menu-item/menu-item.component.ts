import { Component, computed, effect, input, signal } from '@angular/core';
import { TMenuItem } from '../../sidenav/interface/i-menu-item';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  animations: [
    trigger('expandContractMenu', [
      transition(':enter', [
        style({ height: '0px', opacity: 0 }),
        animate('0.5s ease-in-out', style({ height: '*', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('0.5s ease-in-out', style({ height: '0px', opacity: 0 })),
      ]),
    ]),
  ],
  imports: [MatListModule, MatIconModule, RouterModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
})
export class MenuItemComponent {
  item = input.required<TMenuItem>();
  collapsed = input<boolean>(false);
  nestedItemOpen = signal<boolean>(false);
  routeHistory = input('');

  level = computed(() => this.routeHistory().split('/').length - 1);
  indentation = computed(() => this.collapsed() ? '16px' :   `${(16 + (this.level() * 16))}px`  );
}
