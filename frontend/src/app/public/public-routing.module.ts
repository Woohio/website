import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
