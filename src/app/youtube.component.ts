import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'youtube',
    templateUrl: './templates/youtube.component.html'
})
export class YoutubeComponent implements OnInit {
    @Input() result: {};
}