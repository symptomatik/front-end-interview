import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'result',
    templateUrl: './templates/result.component.html',
    styleUrls: ['./styles/result.css']
})
export class ResultComponent implements OnInit{
    @Input() result: {};

    ngOnInit() {
        this.result.medium = 'youtube';
        this.result.type = 'post';
        console.log(this.result);
    }
}
