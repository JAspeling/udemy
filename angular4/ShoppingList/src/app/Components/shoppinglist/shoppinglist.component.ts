import { Component, OnInit } from '@angular/core';
import { Ingredient } from "app/Classes/Ingredient.model";

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10)

  ];
  constructor() { }

  ngOnInit() {
  }

  public onIngredientAdded(ingredient: Ingredient): void {
    if (ingredient) {
      var foundIngredient = this.ingredients.find(i => i.name.toLowerCase() === ingredient.name.toLowerCase());
      if (foundIngredient) {
        foundIngredient.amount += ingredient.amount;
      } else
        this.ingredients.push(ingredient);
    }
  }

  public onIngredientRemovedEvent(ingredientName : string) : void {
    if (ingredientName){
      var foundIngredient = this.ingredients.find(i => i.name.toLowerCase() === ingredientName.toLowerCase());
      if (foundIngredient){
        this.ingredients.splice(this.ingredients.indexOf(foundIngredient), 1);
      }
    }
  }

  public onClearIngredientsEvent() : void {
    this.ingredients = [];
  }
}
