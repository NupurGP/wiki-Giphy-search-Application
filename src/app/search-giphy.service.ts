import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

@Injectable()
export class SearchGiphyService {
  constructor(private http: Http) { }

  searchGiphyContent(searchText: string) {
    let urlSearchParameters = new URLSearchParams();
    urlSearchParameters.set('api_key', 'PunSClna5WBnE2t5NjhY1azHoRgNmNMc');
    urlSearchParameters.set('q', searchText);
    urlSearchParameters.set('limit', '10');
    urlSearchParameters.set('offset', '0');
    urlSearchParameters.set('rating', 'G');
    urlSearchParameters.set('lang', 'en');

    return this.http
      .get('https://api.giphy.com/v1/gifs/search', { params: urlSearchParameters })
      .toPromise()
      .then((response) => response.json());
  }
}
