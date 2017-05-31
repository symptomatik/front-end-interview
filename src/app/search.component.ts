import { Component, Input } from '@angular/core';

import { ResultComponent } from './result.component';
import { SearchService } from './search.service';
@Component({
    selector: 'search',
    templateUrl: './templates/search.component.html',
    styleUrls: ['./styles/search.css']
})
export class SearchComponent {
    constructor(private searchService: SearchService){}
    searchUrl: '';
    searchResult: {medium: string, type: string};

    submitSearch() {
        this.searchResult = this.searchService.search(this.searchUrl);
    }
}