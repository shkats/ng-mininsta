import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Set up Routing, import the angular Router
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ElementsComponent } from './elements/elements.component';

import { ElementsService } from './elements.service';
import { ElementDetailsComponent } from './element-details/element-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LikeComponent } from './like/like.component';
import { UserComponent } from './user/user.component';

// Array of the paths that our Angular App will use
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'elements',
    component: ElementsComponent
  },
  {
    // :number is a placeholder for a value. It's a variable url parameter
    path: 'element/:number',
    component: ElementDetailsComponent
  }, 
    {
    // :number is a placeholder for a value. It's a variable url parameter
    path: 'element',
    component: ElementDetailsComponent
  }, 
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ElementsComponent,
    ElementDetailsComponent,
    NavbarComponent,
    LikeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // Copy this exactly to get the router to work
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ElementsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
