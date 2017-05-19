import { Bl2itemsFrontend2Page } from './app.po';

describe('bl2items-frontend2 App', () => {
  let page: Bl2itemsFrontend2Page;

  beforeEach(() => {
    page = new Bl2itemsFrontend2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
