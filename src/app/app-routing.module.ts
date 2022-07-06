import { AuthGuard } from './auth/auth.guard';
import { CanActivate, Routes, RouterModule } from '@angular/router';
import { BackComponent } from './back/back.component';
import { AppComponent } from './app.component';
import { BackModule } from './back/back.module';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';


const backModule = () => import('./back/back.module').then(x => x.BackModule);

const routes: Routes = [
  {
    path: '', component: AppComponent,
    children: [
      { path: 'back', loadChildren: backModule, canActivate: [AuthGuard] },
      { path: '**', redirectTo: 'back', pathMatch: 'full' }
  ]
}
];



@NgModule({
  declarations: [],
  imports: [
    // CommonModule
    RouterModule.forRoot(routes, {useHash: true})
  ]
})
export class AppRoutingModule { }
