import { DishDelishPage } from './app.po';

describe('dish-delish App', () => {
  let page: DishDelishPage;

  beforeEach(() => {
    page = new DishDelishPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
