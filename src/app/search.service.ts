import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {
    accessToken: string = 'uithbskdfhgiweru89uf0u9a22e0-7ghjjp';
    baseUrl: string = 'https://avspv9f312.execute-api.us-west-2.amazonaws.com/dev/search';
    
    search(url: string) {
        let craftedUrl = this.createUrl(url);
        console.log(craftedUrl);
    }
    
    createUrl(url: string) {
        return this.baseUrl 
                + '?access_token='
                + this.accessToken
                + '&url='
                + url;
    }
}