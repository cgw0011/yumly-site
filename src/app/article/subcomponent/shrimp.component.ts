import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ShrimpInfo } from "./shrimp-info";

@Component ({
    selector: 'shrimp',
    templateUrl: 'shrimp.component.html',
    styleUrls: ['shrimp.component.css']
})

export class ShrimpComponent implements OnInit {
    shrimpInfo: ShrimpInfo | undefined;

    constructor(private http:HttpClient) {  }
    ngOnInit(): void {
        console.log("Sending get request");
        this.showUserInfo();
    }

    getInfo() {
        return this.http.get<ShrimpInfo>("https://yumly-site-default-rtdb.firebaseio.com/articles/Kitchen%20Tips.json");
    }

    showUserInfo() {
        this.getInfo().subscribe((data:ShrimpInfo)=> {
            console.log(data);
            this.shrimpInfo = data;
        })
    }
}