import { NgvvedPage } from './app.po';

describe('ngvved App', () => {
  let page: NgvvedPage;

  beforeEach(() => {
    page = new NgvvedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
