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
    fetchResult: {};
    errorMessage: any;
    loading: boolean = false;

    constructor(private searchService: SearchService){}

    submitSearch() {
        this.loading = true;
        this.searchService.search(this.searchUrl)
                          .subscribe(
                            data => {this.fetchResult = data;this.loading = false;},
                            error => this.errorMessage = <any>error);
    }
}