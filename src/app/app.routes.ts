import { Route, Routes } from '@angular/router';
import { allMenuItems } from './core/sidenav/component/sidenav.component';
import { TMenuItem } from './core/sidenav/interface/i-menu-item';

const itemToRoute = (item: TMenuItem): Route => {


  const route: Route = {
    path: item.route,
    component: item.component,
  };
  if (item.subItems) {
    route.children = item.subItems.map((s) => itemToRoute(s));
  }
  return route;
};

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  ...allMenuItems().map((item) => itemToRoute(item)),

];


  // {
  //   path: 'dashboard',
  //   component: DashboardComponent
  // },
  // {
  //   path: 'content',
  //   loadComponent: () => import('./modules/content/pages/content/content.component').then(m => m.ContentComponent),
  //   children: [
  //     {
  //       path: 'videos',
  //       loadComponent: () => import('./modules/content/pages/content/videos/videos.component').then(m => m.VideosComponent),
  //       children: [
  //         {
  //          path: 'shorts',
  //          loadComponent: () => import('./modules/content/pages/content/videos/shorts/shorts.component').then(m => m.ShortsComponent),
  //         },
  //         {
  //           path: 'long-form',
  //           loadComponent: () => import('./modules/content/pages/content/videos/long-form/long-form.component').then(m => m.LongFormComponent),
  //          }
  //       ]
  //     },
  //     {
  //       path: 'playlists',
  //       loadComponent: () => import('./modules/content/pages/content/playlists/playlists.component').then(m => m.PlaylistsComponent)
  //     },
  //     {
  //       path: 'posts',
  //       loadComponent: () => import('./modules/content/pages/content/posts/posts.component').then(m => m.PostsComponent)
  //     }
  //   ]
  // },
  // {
  //   path: 'analytics',
  //   loadComponent: () => import('./modules/analytics/pages/analytics/analytics.component').then(m => m.AnalyticsComponent)
  // },
  // {
  //   path: 'comments',
  //   loadComponent: () => import('./modules/comment/pages/comment/comment.component').then(m => m.CommentComponent)
  // }