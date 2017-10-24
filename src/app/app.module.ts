import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';

import { SearchHistoryComponent } from './search-history/search-history.component';
import { SearchHistoryService } from './search-history.service';
import { SearchWikiService } from './search-wiki.service';
import { SearchGiphyService } from './search-giphy.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'search-history', component: SearchHistoryComponent },
  { path: '**', component: HomePageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
	SearchHistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	JsonpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SearchHistoryService, SearchWikiService, SearchGiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
