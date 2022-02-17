import { Component } from "@angular/core";
import { mock_list } from "../food/mock-list";
import { FoodList } from "../food/mock-list.model";

@Component({
    selector: 'content',
    templateUrl: 'content.component.html',
    styleUrls: ['content.component.css']
})
export class ContentComponent {
    foods: FoodList [] = [];

  constructor() {
    for (var product of mock_list) {
      console.log(product);
      this.foods.push(product);
    }
  }
}