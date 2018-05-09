import { AppPage } from './app.po';

describe('Personal Trainer App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Ready for a Workout?');
  });
});
