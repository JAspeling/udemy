import { Recipe } from '../Classes/recipe.model';
import { Ingredient } from '../Classes/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10)
  ];

  ingredientChanged: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();

  constructor() { }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient, emit: boolean = true): void {
    var foundIngredient = this.ingredients.find(i => i.name.toLowerCase() === ingredient.name.toLowerCase());
    if (foundIngredient) {
      foundIngredient.amount += ingredient.amount;
    } else
      this.ingredients.push(new Ingredient(ingredient.name, ingredient.amount));

    this.ingredientChanged.emit(this.ingredients.slice());
  }

  removeIngredient(name: string): void {
    if (name) {
      var foundIngredient = this.ingredients.find(i => i.name.toLowerCase() === name.toLowerCase());
      if (foundIngredient) {
        this.ingredients.splice(this.ingredients.indexOf(foundIngredient), 1);
      }
    }
    this.ingredientChanged.emit(this.ingredients);
  }

  clearIngredients(): void {
    this.ingredients = [];
    this.ingredientChanged.emit(this.ingredients);
  }

  addIngredientsFromRecipe(recipe: Recipe) {
    if (recipe && recipe.ingredients) {
      recipe.ingredients.forEach(ingredient => 
        this.addIngredient(ingredient)
      );
      this.ingredientChanged.emit(this.ingredients.slice());
    }
  }

  addIngredients(ingredients : Ingredient[]) : void {
    if (ingredients){
      ingredients.forEach(i => this.addIngredient(i, false));
      // this.ingredients.push(...ingredients);
      this.ingredientChanged.emit(this.ingredients.slice());
    }
  }
}
