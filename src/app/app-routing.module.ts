import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachupperComponent } from './features/shell/containers/coachupper/coachupper.component';

const routes: Routes = [
  { path: '', component: CoachupperComponent },
  { path: 'dashboard', component: CoachupperComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
