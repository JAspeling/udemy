import { RecipeService } from '../../services/recipe.service';
import { ShoppingListService } from '../../services/shoppinglist.service';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "app/Classes/recipe.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService,
    private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  sendToShoppingList() {
    if (this.recipe && this.recipe.ingredients) {
      this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
      //this.shoppingListService.addIngredientsFromRecipe(this.recipe);
    }
  }

}
