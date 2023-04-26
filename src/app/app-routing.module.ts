import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { LoaderComponent } from './pages/loader/loader.component';
import { IconsComponent } from './pages/icons/icons.component';

const routes: Routes = [
  { path: "", component: GetStartedComponent },
  { path: "buttons", component: ButtonsComponent },
  { path: "loader", component: LoaderComponent },
  { path: "icons", component: IconsComponent },
  { path: '**', redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
