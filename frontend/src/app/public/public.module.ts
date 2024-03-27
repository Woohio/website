import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public/public.component';
import { PublicRoutingModule } from './public-routing.module';
import { BusinessAutomationComponent } from '../business-automation/business-automation.component';
import { DigitalMarketingComponent } from '../digital-marketing/digital-marketing.component';
import { SoftwareDevelopmentComponent } from '../software-development/software-development.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { DataAnayliticsComponent } from '../data-anaylitics/data-anaylitics.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ServiceSidebarComponent } from '../service-sidebar/service-sidebar.component';
import { IntersectionObserverDirective } from '../inter-section-observer.directive';
import { ServicesComponent } from '../services/services.component';

@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    BusinessAutomationComponent,
    SoftwareDevelopmentComponent,
    DigitalMarketingComponent,
    DataAnayliticsComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    ServiceSidebarComponent,
    FooterComponent,
    IntersectionObserverDirective,
    ServicesComponent,
  ],
  imports: [CommonModule, PublicRoutingModule],
  exports: [IntersectionObserverDirective],
})
export class PublicModule {}
