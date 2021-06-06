import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitydetailsComponent } from './citydetails/citydetails.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'info/:id',component:CitydetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
