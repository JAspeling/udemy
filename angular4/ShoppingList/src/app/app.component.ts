import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFeature: string = 'Recipes';

  public onChangeFeature(feature: string): void {
    this.currentFeature = feature;
  }
}
