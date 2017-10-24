import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';

@Injectable()
export class SearchWikiService {
  constructor(private jsonp: Jsonp) { }

  searchWikiContent(searchText: string) {
    let urlSearchParameters = new URLSearchParams();
    urlSearchParameters.set('action', 'opensearch');
    urlSearchParameters.set('search', searchText);
    urlSearchParameters.set('format', 'json');

    return this.jsonp
      .get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { params: urlSearchParameters })
      .toPromise()
      .then((response) => response.json()[1]);
  }
}
