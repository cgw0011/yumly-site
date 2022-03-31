import { Component, OnInit } from "@angular/core";
import { mock_list } from "../food/mock-list";
import { FoodList } from "../food/mock-list.model";
import { MockListService } from "../food/mock-list.service";


@Component({
    selector: 'content',
    templateUrl: 'content.component.html',
    styleUrls: ['content.component.css']
})
export class ContentComponent implements OnInit {
    foods: FoodList [] = [];

  constructor(private service:MockListService) {

  }
  ngOnInit(): void {
    console.log("Fetching food data")
    this.service.getProducts().subscribe(data => {
      console.log(data);
      for (var product of data) {
        this.foods.push(product);
        console.log(product);
      }
    })
  }
}

