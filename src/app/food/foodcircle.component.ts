import { Component, Input } from "@angular/core";

@Component({
    selector: 'foodcircle',
    templateUrl: 'foodcircle.component.html',
    styleUrls: ['foodcircle.component.css']
})
export class FoodCircleComponent {
    @Input() img:string;
    text:string;

    constructor() {
        this.img = "";
        this.text = "Missing";
    }
}