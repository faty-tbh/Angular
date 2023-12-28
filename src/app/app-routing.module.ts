import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlowersListComponent } from './components/flowers-list/flowers-list.component';
import { AddFlowersComponent } from './components/add-flowers/add-flowers.component';
import { FlowersDetailsComponent } from './components/flowers-details/flowers-details.component';
const routes: Routes = [
  {
    path:'flowers', component: FlowersListComponent
  },
  {
    path:'add',component: AddFlowersComponent
  },
  {
    path: 'flowers/:id',component: FlowersDetailsComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
