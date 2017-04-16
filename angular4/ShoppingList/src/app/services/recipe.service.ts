import { ShoppingListService } from './shoppinglist.service';
import { Ingredient } from '../Classes/ingredient.model';
import { Injectable, EventEmitter  } from '@angular/core';
import { Recipe } from "app/Classes/recipe.model";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe("Tasty Schnitzel", 
      "Super-tasty Schnitzel - just awesome!", 
      "./../../assets/Schnitzel.JPG",
      [
        new Ingredient('Chicken', 1),
        new Ingredient('French Fries', 20)
      ] ),
    new Recipe("Burger", 
      "What else do you need to see?", 
      "./../../assets/Burger.jpg",
      [
        new Ingredient('Buns', 2),
        new Ingredient('Patty', 1),
        new Ingredient('Tomatoes', 2),
        new Ingredient('Cheese', 1),
        new Ingredient('Lettuce', 3),
        new Ingredient('Mayonnaise', 1),
      ])
  ];

  recipeSelected : EventEmitter<Recipe> = new EventEmitter<Recipe>()
  
  constructor(private shoppingListService : ShoppingListService) { }

  getRecipes(): Recipe[] {
    // return the copied version of the Recipes (Breaks the Reference)
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients : Ingredient[]): void {
    if (ingredients){
      this.shoppingListService.addIngredients(ingredients);
    }
  }
}
