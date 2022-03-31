import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FoodList } from "./mock-list.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
    providedIn: 'root'
})
export class MockListService {

    constructor(private db:AngularFireDatabase) {

    }

    public getProducts() {
        return this.db.list<FoodList>("homepage/foods").valueChanges();
    }

    public getProduct(index:number) {
        return this.db.list<FoodList>("products", ref => ref.orderByChild("text").startAt("a")).valueChanges();
    }

    public addProduct(food:FoodList) {
        this.db.list("homepage/foods").push(food);
    }
}