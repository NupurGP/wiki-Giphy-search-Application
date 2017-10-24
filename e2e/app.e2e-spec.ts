import { WikiGiphySearchApplicationPage } from './app.po';

describe('wiki-giphy-search-application App', () => {
  let page: WikiGiphySearchApplicationPage;

  beforeEach(() => {
    page = new WikiGiphySearchApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
