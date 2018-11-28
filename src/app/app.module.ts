import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavComponent } from './shared/nav/nav.component';
import { SearchComponent } from './shared/header/search.component';
import { DatabindingComponent } from './concepts/databinding/databinding.component';
import { SiComponent } from './concepts/databinding/si/si.component';
import { PbComponent } from './concepts/databinding/pb/pb.component';
import { EbComponent } from './concepts/databinding/eb/eb.component';
import { TwbComponent } from './concepts/databinding/twb/twb.component';
import { CpbComponent } from './concepts/databinding/cpb/cpb.component';
import { CebComponent } from './concepts/databinding/ceb/ceb.component';
import { ProgramsComponent } from './programs/programs.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AddProgramComponent } from './programs/add-program/add-program.component';
import { DetailProgramComponent } from './programs/detail-program/detail-program.component';

// main switch box -- everything is wired
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    SearchComponent,
    DatabindingComponent,
    SiComponent,
    PbComponent,
    EbComponent,
    TwbComponent,
    CpbComponent,
    CebComponent,
    ProgramsComponent,
    AboutComponent,
    ContactComponent,
    AddProgramComponent,
    DetailProgramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]  // Step3: kickstarting a module with a component
})
export class AppModule { }
