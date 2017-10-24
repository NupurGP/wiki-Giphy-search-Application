import { Injectable } from '@angular/core';

@Injectable()
export class SearchHistoryService {
  private searchHistoryArray: string[] = [];

  constructor() { }

  addToSearchHistoryArray(searchEntry: string) {
    this.searchHistoryArray.push(searchEntry);
  }

  getSearchHistory() {
    return this.searchHistoryArray;
  }
}
