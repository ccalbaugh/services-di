import { ServicesDiPage } from './app.po';

describe('services-di App', function() {
  let page: ServicesDiPage;

  beforeEach(() => {
    page = new ServicesDiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
