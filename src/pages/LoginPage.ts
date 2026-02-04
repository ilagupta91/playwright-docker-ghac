import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/');
  }

  async login(searchtext: string) {
    const searchBox = this.page.locator("//textarea[@name='q']");
    await searchBox.fill(searchtext);
    await searchBox.press('Enter');
  }
}
