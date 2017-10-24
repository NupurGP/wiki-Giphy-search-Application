import { Component, OnInit } from '@angular/core';


import { SearchHistoryService } from '../search-history.service';
import { SearchWikiService } from '../search-wiki.service';
import { SearchGiphyService } from '../search-giphy.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  searchText: string;
  wikiSearchAnswer = [];
  giphySearchAnswer = [];

  constructor(
    private searchHistoryService: SearchHistoryService,
    private searchWikiService: SearchWikiService,
    private searchGiphyService: SearchGiphyService
  ) { }

  ngOnInit() {}
  
   getTimeStampVal(): string {
    return (new Date().toUTCString());
  }

  
  searchGiphy() {
    this.resetSearchResults()
    this.searchHistoryService.addToSearchHistoryArray('Giphy search history- ' + this.searchText + ' -  ' + this.getTimeStampVal());
    this.searchGiphyService.searchGiphyContent(this.searchText).then(searchResults => this.giphySearchAnswer = searchResults.data);
  }
  
  searchWiki() {
    this.resetSearchResults();
    this.searchHistoryService.addToSearchHistoryArray('Wiki search history- ' + this.searchText + ' -  ' + this.getTimeStampVal());
    this.searchWikiService.searchWikiContent(this.searchText).then(searchResults => this.wikiSearchAnswer = searchResults);
  }

 

  resetSearchResults() {
    this.wikiSearchAnswer = [];
    this.giphySearchAnswer = [];
  }

}
