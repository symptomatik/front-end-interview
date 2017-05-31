import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
    selector: 'youtube',
    templateUrl: './templates/youtube.component.html',
    styleUrls: ['./styles/result.css', './styles/youtube.css']
})
export class YoutubeComponent implements OnInit {
    @Input() result: {channel: [any], post: [any], type: string, medium: string};
    channel: {};
    post: {post_id: string};
    dangerousUrl: string = 'https://www.youtube.com/embed/';
    embedUrl: SafeResourceUrl;

    constructor(private sanitizer: DomSanitizer) {
        this.embedUrl = sanitizer.bypassSecurityTrustResourceUrl(this.dangerousUrl);
    }

    ngOnInit() {
        this.channel = this.result.channel[0]._source;
        if(this.result.type === 'post') {
            this.post = this.result.post[0]._source;
            this.embedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousUrl + this.post.post_id);
        }
    }
}