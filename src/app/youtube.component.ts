import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'youtube',
    templateUrl: './templates/youtube.component.html',
    styleUrls: ['./styles/result.css', './styles/youtube.css']
})
export class YoutubeComponent implements OnInit {
    @Input() result: {channel: [any], post: [any], type: string, medium: string};
    channel: {};
    post: {};

    ngOnInit() {
        this.channel = this.result.channel[0]._source;
        if(this.result.type === 'post') {
            this.post = this.result.post[0]._source;
        }
    }
}