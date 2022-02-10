import { Component } from '@angular/core';
import { mock_list } from './food/mock-list';
import { FoodList } from './food/mock-list.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yumly-site';
  foods: FoodList [] = [];

  constructor() {
    for (var product of mock_list) {
      console.log(product);
      this.foods.push(product);
    }
  }
}
