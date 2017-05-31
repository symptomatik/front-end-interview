import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'youtube',
    templateUrl: './templates/youtube.component.html',
    styleUrls: ['./styles/result.css', './styles/youtube.css']
})
export class YoutubeComponent implements OnInit {
    @Input() result: {};

    ngOnInit() {
        console.log('youtube init');
    }
}