import { Component, OnInit } from '@angular/core';
import { FoodCircleComponent } from '../foodcircle.component';
import { FoodList } from '../mock-list.model';
import { MockListService } from '../mock-list.service';

@Component({
  selector: 'fm-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {

  constructor(private ps:MockListService) { }

  ngOnInit(): void {
  }

  addProduct(food:FoodList) {
    console.log("added product to database");
    console.log(food);
    this.ps.addProduct(food);
  }
}
