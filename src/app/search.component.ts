import { Component, Input } from '@angular/core';

import { ResultComponent } from './result.component';
import { SearchService } from './search.service';
@Component({
    selector: 'search',
    templateUrl: './templates/search.component.html',
    styleUrls: ['./styles/search.css']
})
export class SearchComponent {
    searchUrl: '';
    searchResult: {medium: string, type: string, data: any};
    fetchResult: any = {};
    errorMessage: any;
    
    constructor(private searchService: SearchService){}

    submitSearch() {
        this.searchService.search(this.searchUrl)
                          .subscribe(
                            data => this.fetchResult = data,
                            error => this.errorMessage = <any>error);
    }
}