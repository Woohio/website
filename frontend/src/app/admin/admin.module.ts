import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortfolioManagementComponent } from '../portfolio-management/portfolio-management.component';
import { BlogManagementComponent } from '../blog-management/blog-management.component';
import { ContactManagementComponent } from '../contact-management/contact-management.component';
import { DbService } from '../backend-services/db.service';
import { StorageService } from '../backend-services/storage.service';

@NgModule({
  declarations: [
    AdminComponent,
    PortfolioManagementComponent,
    BlogManagementComponent,
    ContactManagementComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [DbService, StorageService],
})
export class AdminModule {}
