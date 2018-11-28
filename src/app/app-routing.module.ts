import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatabindingComponent } from './concepts/databinding/databinding.component';
import { ProgramsComponent } from './programs/programs.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AddProgramComponent } from './programs/add-program/add-program.component';
import { DetailProgramComponent } from './programs/detail-program/detail-program.component';

//configure routes 
const routes: Routes = [
  { path: '', component: DatabindingComponent},
  { path: 'programs', component: ProgramsComponent},
  { path: 'programs/add', component: AddProgramComponent},
  { path: 'programs/1', component: DetailProgramComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],   // registering the routes
  exports: [RouterModule]
})
export class AppRoutingModule { }

