import { Component, Input } from '@angular/core';

import { ResultComponent } from './result.component';
import { SearchService } from './search.service';
@Component({
    selector: 'search',
    templateUrl: './templates/search.component.html',
    styleUrls: ['./style.css']
})
export class SearchComponent {
    constructor(private searchService: SearchService){}
    searchUrl: '';
    searchResult = {name:'jim'};

    submitSearch() {
        this.searchService.search(this.searchUrl);
    }
}