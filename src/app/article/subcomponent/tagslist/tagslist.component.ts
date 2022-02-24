import { Component, Input } from "@angular/core";

@Component ({
    selector: 'tagslist',
    templateUrl: 'tagslist.component.html',
    styleUrls: ['tagslist.component.css']
})

export class TagsListComponent {
    @Input() img:string;
    text:string;
    link:string;

    constructor() {
        this.img = "";
        this.text = "Missing";
        this.link = "#";
    }
}