import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from "./shared/sidenav/component/sidenav.component";
import { MenuItemComponent } from './shared/components/menu-item/menu-item.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, SidenavComponent, MenuItemComponent, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  collapsed = signal<boolean>(false);
  sidenavWidth = computed(() => this.collapsed() ? '65px' : '250px');
}
