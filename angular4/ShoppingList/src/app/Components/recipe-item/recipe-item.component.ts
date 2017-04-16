import { RecipeService } from '../../services/recipe.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'app/Classes/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe : Recipe;
  isSelected : boolean = false;

  constructor(private recipeService : RecipeService) { }

  ngOnInit() {
  }

  public onRecipeSelected() : void{
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
