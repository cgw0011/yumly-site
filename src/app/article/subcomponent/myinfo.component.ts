import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { MyInfo } from "./myinfo";

@Component ({
    selector: 'my-info',
    templateUrl: 'myinfo.component.html',
    styleUrls: ['myinfo.component.css']
})

export class MyInfoComponent implements OnInit {
    myInfo: MyInfo | undefined;

    constructor(private http:HttpClient) {  }
    ngOnInit(): void {
        console.log("Sending get request");
        this.showUserInfo();
    }

    getUserInfo() {
        return this.http.get<MyInfo>("https://yumly-site-default-rtdb.firebaseio.com/my-info.json");
    }

    showUserInfo() {
        this.getUserInfo().subscribe((data:MyInfo)=> {
            console.log(data);
            this.myInfo = data;
        })
    }
}