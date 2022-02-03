import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideNavBarComponent } from './navigation/sidenavbar.component';
import { MainBackgroundComponent } from './background/mainbackground.component';
import { ContentComponent } from './maincontent/content.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavBarComponent,
    MainBackgroundComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
