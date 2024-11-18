import { Component, computed, Input, signal } from '@angular/core';
import { TMenuItem } from '../interface/i-menu-item';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { MenuItemComponent } from '../../components/menu-item/menu-item.component';
import { DashboardComponent } from '../../../modules/pages/dashboard/dashboard.component';
import { ContentComponent } from '../../../modules/content/pages/content/content.component';
import { PostsComponent } from '../../../modules/content/pages/content/posts/posts.component';
import { VideosComponent } from '../../../modules/content/pages/content/videos/videos.component';
import { ShortsComponent } from '../../../modules/content/pages/content/videos/shorts/shorts.component';
import { LongFormComponent } from '../../../modules/content/pages/content/videos/long-form/long-form.component';
import { AnalyticsComponent } from '../../../modules/analytics/pages/analytics/analytics.component';
import { CommentComponent } from '../../../modules/comment/pages/comment/comment.component';
import { PlaylistsComponent } from '../../../modules/content/pages/content/playlists/playlists.component';

export const allMenuItems = signal<TMenuItem[]>([
  {
    icon: 'dashboard',
    label: 'Dashboard',
    route: 'dashboard',
    component: DashboardComponent,
    routerPath: './modules/dashboard/pages/dashboard/dashboard.component',
  },
  {
    icon: 'video_library',
    label: 'Content',
    route: 'content',
    component: ContentComponent,
    routerPath: './modules/content/pages/content/content.component',
    subItems: [
      {
        icon: 'playlist_play',
        label: 'Playlists',
        route: 'playlists',
        component: PlaylistsComponent,
        routerPath: './modules/content/pages/content/playlists/playlists.component',
      },
      {
        icon: 'post_add',
        label: 'Posts',
        route: 'posts',
        component: PostsComponent,
        routerPath: './modules/content/pages/content/posts/posts.component',
      },
      {
        icon: 'play_circle',
        label: 'Videos',
        route: 'videos',
        component: VideosComponent,
        routerPath: './modules/content/pages/content/videos/videos.component',
        subItems: [
          {
            icon: 'movie',
            label: 'Shorts',
            route: 'shorts',
            component: ShortsComponent,
            routerPath: './modules/content/pages/content/videos/shorts/shorts.component',
          },
          {
            icon: 'tv',
            label: 'Long Form',
            route: 'long-form',
            component: LongFormComponent,
            routerPath: './modules/content/pages/content/videos/long-form/long-form.component',
          },
        ],
      },
    ],
  },
  {
    icon: 'analytics',
    label: 'Analytics',
    route: 'analytics',
    component: AnalyticsComponent,
    routerPath: './modules/analytics/pages/analytics/analytics.component',
  },
  {
    icon: 'comments',
    label: 'Comments',
    route: 'comments',
    component: CommentComponent,
    routerPath: './modules/comments/pages/comments/comments.component',
  },
]);

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatListModule, MatIconModule, RouterModule, MenuItemComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  sideNavCollapsed = signal<boolean>(false);
  @Input() set collapsed(value: boolean) {
    this.sideNavCollapsed.set(value);
  }

  menuItems = allMenuItems;

  profilePicSize = computed(() => (this.sideNavCollapsed() ? '32' : '100'));
}
