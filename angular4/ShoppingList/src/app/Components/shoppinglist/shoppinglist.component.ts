import { ShoppingListService } from '../../services/shoppinglist.service';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from "app/Classes/Ingredient.model";

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients : Ingredient[];
  
  constructor( private shoppingListService : ShoppingListService ) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientChanged.subscribe(
      (ingredients : Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }
}
