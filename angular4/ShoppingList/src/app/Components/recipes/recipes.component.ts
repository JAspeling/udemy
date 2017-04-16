import { RecipeService } from '../../services/recipe.service';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "app/Classes/recipe.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  @Input() selectedRecipe : Recipe;

  constructor(private recipeService : RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }
}
