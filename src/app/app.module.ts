import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideNavBarComponent } from './navigation/sidenavbar.component';
import { MainBackgroundComponent } from './background/mainbackground.component';
import { ContentComponent } from './maincontent/content.component';
import { FavoriteComponent } from './maincontent/favoritefoods/favorite.component';
import { FoodCircleComponent } from './food/foodcircle.component';
import { AppRoutingModule } from './app-routing.module';
import { ArticleComponent } from './article/article.component';
import { MainbackgroundTextComponent } from './background/mainbackground-text.component';
import { MealPlannerComponent } from './mealplanner/mealplanner.component';
import { PantryReadyRecipes } from './pantryready/pantryready.component';
import { BrowseComponent } from './browse/browse.component';
import { ProRecipesComponent } from './prorecipes/prorecipes.component';
import { TagsBarComponent } from './article/subcomponent/tagsbar.component';
import { TagsListComponent } from './article/subcomponent/tagslist/tagslist.component';
import {HttpClientModule} from '@angular/common/http'
import { MainListComponent } from './maincontent/maincontentlist/mainlist.component';
import { ShrimpComponent } from './article/subcomponent/shrimp.component';
import { MyInfoComponent } from './article/subcomponent/myinfo.component';
import { AddFoodComponent } from './food/add-food/add-food.component';
import { FormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AuthenticationComponent } from './auth/authentication/authentication.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavBarComponent,
    MainBackgroundComponent,
    ContentComponent,
    FavoriteComponent,
    FoodCircleComponent,
    ArticleComponent,
    MainbackgroundTextComponent,
    MealPlannerComponent,
    PantryReadyRecipes,
    BrowseComponent,
    ProRecipesComponent,
    TagsBarComponent,
    TagsListComponent,
    MainListComponent,
    ShrimpComponent,
    MyInfoComponent,
    AddFoodComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
