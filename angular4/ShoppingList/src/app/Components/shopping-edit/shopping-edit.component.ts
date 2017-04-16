import { Component, OnInit, ViewChild, EventEmitter, Output, ElementRef } from '@angular/core';
import { Ingredient } from "app/Classes/ingredient.model";
import { ShoppingListService } from "app/services/shoppinglist.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') ingredientName: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;

  @Output() ingredientRemovedEvent = new EventEmitter<string>();
  @Output() clearIngredientsEvent = new EventEmitter<void>();

  constructor( private shoppinglistService : ShoppingListService ) { }

  ngOnInit() {
  }

  addIngredient(): void {
    const name: string = (this.ingredientName.nativeElement as HTMLInputElement).value;
    const amount: number = +(this.amount.nativeElement as HTMLInputElement).value;

    if ((name && name.trim() != "") && amount != 0) {
      const ingredient = new Ingredient(name, amount);
      this.shoppinglistService.addIngredient(ingredient);
    }
  }

  public removeIngredient(): void {
    let name: string = (this.ingredientName.nativeElement as HTMLInputElement).value;
    this.shoppinglistService.removeIngredient(name);
    // Clear the text box
    (this.ingredientName.nativeElement as HTMLInputElement).value = "";
  }

  public clearIngredients() {
    this.shoppinglistService.clearIngredients();
  }
}
