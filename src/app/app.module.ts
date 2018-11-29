import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { SearchComponent } from './components/shared/header/search.component';
import { DatabindingComponent } from './components/concepts/databinding/databinding.component';
import { SiComponent } from './components/concepts/databinding/si/si.component';
import { PbComponent } from './components/concepts/databinding/pb/pb.component';
import { EbComponent } from './components/concepts/databinding/eb/eb.component';
import { TwbComponent } from './components/concepts/databinding/twb/twb.component';
import { CpbComponent } from './components/concepts/databinding/cpb/cpb.component';
import { CebComponent } from './components/concepts/databinding/ceb/ceb.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddProgramComponent } from './components/programs/add-program/add-program.component';
import { DetailProgramComponent } from './components/programs/detail-program/detail-program.component';

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
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]  // Step3: kickstarting a module with a component
})
export class AppModule { }
