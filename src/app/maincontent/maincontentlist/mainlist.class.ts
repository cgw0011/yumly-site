import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MainListInfo } from "./mainlist";

@Injectable(
    {providedIn: 'root'}
)
export class MainList {
    private baseUrl:string = "https://yumly-site-default-rtdb.firebaseio.com/"
    private productsEndPoint:string = "homepage/main-list.json";

    constructor(private http:HttpClient) {

    }

    getProducts() {
        return this.http.get<MainListInfo>(this.baseUrl + this.productsEndPoint)
    }
}