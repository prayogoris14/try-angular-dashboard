import { NgModule } from '@angular/core';
import { DashComponent } from './dash/dash.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'dashboard', component: DashComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
