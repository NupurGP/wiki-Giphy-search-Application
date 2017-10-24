import { Component, OnInit } from '@angular/core';

import { SearchHistoryService } from '../search-history.service';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent implements OnInit {
  searchHistory: string[];

  constructor(private searchHistoryService: SearchHistoryService) { }

  ngOnInit() {
    this.searchHistory = this.searchHistoryService.getSearchHistory();
  }
}
