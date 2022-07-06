import { AuthGuard } from './../auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent} from './index/index.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';

const routes: Routes = [
  {
    path: 'back',
    component: IndexComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'page1',
        component: Page1Component,
      },
      {
        path: 'page2',
        component: Page2Component,
      },
      {
        path: 'page3',
        component: Page3Component,
      }
    ],
  },
];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes, { enableTracing: true })
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class BackRoutingModule { }
