import { TrainingLogPage } from './app.po';

describe('training-log App', () => {
  let page: TrainingLogPage;

  beforeEach(() => {
    page = new TrainingLogPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
