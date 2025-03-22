import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './common/menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactItemsComponent } from './pages/contact/contact-items/contact-items.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceItemComponent } from './pages/home/service-item/service-item.component';
import { ServiceDetailsComponent } from './pages/home/service-details/service-details.component';
import { FormsModule } from '@angular/forms';
import { EnquiryFormComponent } from './pages/home/enquiry-form/enquiry-form.component';
import { ProjectItemsComponent } from './pages/projects/project-items/project-items.component';
import { EnquiriesComponent } from './pages/enquiries/enquiries.component';
import { EnquiryItemsComponent } from './pages/enquiries/enquiry-items/enquiry-items.component';
import { LoginComponent } from './common/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    ContactItemsComponent,
    ServiceItemComponent,
    ServiceDetailsComponent,
    EnquiryFormComponent,
    ProjectItemsComponent,
    EnquiriesComponent,
    EnquiryItemsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
