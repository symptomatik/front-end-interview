import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'result',
    templateUrl: './templates/result.component.html',
    styleUrls: ['./styles/result.css']
})
export class ResultComponent implements OnInit{
    @Input() result: {medium: string, type: string, channel: [any], post: [any]};

    ngOnInit() {
        this.result.medium = this.determineMedium();
        this.result.type = this.determineType();
    }

    determineMedium() {
        if(this.result.channel && this.result.channel.length > 0) {
            return this.result.channel[0]._type || 'error';
        }
        return 'error';
    }
    
    determineType() {
        if(this.result.hasOwnProperty('post')) {
            return 'post';
        } else {
            return 'channel';
        }
    }


}
