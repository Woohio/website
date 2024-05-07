import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { PortfolioManagementComponent } from '../portfolio-management/portfolio-management.component';
import { BlogManagementComponent } from '../blog-management/blog-management.component';
import { ContactManagementComponent } from '../contact-management/contact-management.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'portfolio',
        component: PortfolioManagementComponent,
      },
      {
        path: 'blogs',
        component: BlogManagementComponent,
      },
      {
        path: 'contacts',
        component: ContactManagementComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
