import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
    accessToken: string = 'uithbskdfhgiweru89uf0u9a22e0-7ghjjp';
    baseUrl: string = 'https://avspv9f312.execute-api.us-west-2.amazonaws.com/dev/search';
    
    constructor(private http: Http) {}

    createUrl(url: string) {
        return this.baseUrl 
                + '?access_token='
                + this.accessToken
                + '&url='
                + url;
    }

    extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    handleError(error: Response | any) {
        console.log(error.json());
        return Observable.throw('hi');
    }

    fetchResult(url: string): Observable<any>{
        return this.http.get(url)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    search(url: string) {
        let craftedUrl: string = this.createUrl(url);
        return this.fetchResult(craftedUrl);
    }
    
}