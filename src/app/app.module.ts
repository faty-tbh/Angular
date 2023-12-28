import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FlowersListComponent } from './components/flowers-list/flowers-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddFlowersComponent } from './components/add-flowers/add-flowers.component';
import { FlowersDetailsComponent } from './components/flowers-details/flowers-details.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FlowersListComponent,
    AddFlowersComponent,
    FlowersDetailsComponent
    
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
