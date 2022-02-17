import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { ContentComponent } from './maincontent/content.component';
import { MainbackgroundTextComponent } from './background/mainbackground-text.component';
import { MealPlannerComponent } from './mealplanner/mealplanner.component';
import { PantryReadyRecipes } from './pantryready/pantryready.component';
import { BrowseComponent } from './browse/browse.component';
import { ProRecipesComponent } from './prorecipes/prorecipes.component';

const routes:Routes = [
  {path: 'articles', component:ArticleComponent},
  {path: 'home', component:MainbackgroundTextComponent},
  {path: 'meal-planner', component:MealPlannerComponent},
  {path: 'pantry-ready-recipes', component:PantryReadyRecipes},
  {path: 'browse', component:BrowseComponent},
  {path: 'pro-recipes', component:ProRecipesComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
