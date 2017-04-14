import { Component, OnInit, ViewChild, EventEmitter, Output, ElementRef } from '@angular/core';
import { Ingredient } from "app/Classes/Ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') ingredientName: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;

  @Output() ingredientAddedEvent = new EventEmitter<Ingredient>();
  @Output() ingredientRemovedEvent = new EventEmitter<string>();
  @Output() clearIngredientsEvent = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  addIngredient(): void {
    let name: string = (this.ingredientName.nativeElement as HTMLInputElement).value;
    let amount: number = +(this.amount.nativeElement as HTMLInputElement).value;

    if ((name && name.trim() != "") && amount != 0) {
      let ingredient = new Ingredient(name, amount);
      this.ingredientAddedEvent.emit(ingredient);
    }
  }

  public removeIngredient(): void {
    let name: string = (this.ingredientName.nativeElement as HTMLInputElement).value;
    this.ingredientRemovedEvent.emit(name);

    (this.ingredientName.nativeElement as HTMLInputElement).value = "";
  }

  public clearIngredients() {
    this.clearIngredientsEvent.emit();
  }
}
