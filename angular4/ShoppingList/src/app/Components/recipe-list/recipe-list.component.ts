import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from "app/Classes/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipeEvent = new EventEmitter<Recipe>();
  
  recipes: Recipe[] = [
    new Recipe("Test Recipe", "This is asimply a test", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/480px-Recipe_logo.jpeg"),
    new Recipe("Another Test Recipe", "This is asimply a test 2", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/480px-Recipe_logo.jpeg")
  ];

  constructor() {

  }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) : void{
    this.selectedRecipeEvent.emit(recipe);
  }
}
