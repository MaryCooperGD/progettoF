import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'choosefilter', loadChildren: './choosefilter/choosefilter.module#ChoosefilterPageModule' },
  { path: 'place-list', loadChildren: './place-list/place-list.module#PlaceListPageModule' },
  { path: 'place-details', loadChildren: './place-details/place-details.module#PlaceDetailsPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
