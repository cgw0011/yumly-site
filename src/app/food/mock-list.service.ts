import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FoodList } from "./mock-list.model";

@Injectable({
    providedIn: 'root'
})
export class MockListService {
    private baseUrl:string = 'https://yumly-site-default-rtdb.firebaseio.com/'
    private productsEndPoint:string = 'homepage/foods.json';

    constructor(private http:HttpClient) {

    }

    public getProducts() {
        return this.http.get<FoodList []>(this.baseUrl + this.productsEndPoint)
    }

    public getProduct(index:number) {
        return this.http.get<FoodList>(this.baseUrl + 'homepage/foods/' + index + '.json')
    }
}