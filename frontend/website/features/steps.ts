import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { checkHttpUrl } from './utils';

const { Given, When, Then } = createBdd();

Given('I have an open browser', async ({ page }) => {
  return;
});

Given('I open url {string}', async ({ page }, url) => {
  expect(checkHttpUrl(url)).toBeTruthy();
  await page.goto(url);
});

When('I navigate to {string}', async ({ page }, url) => {
  expect(checkHttpUrl(url)).toBeTruthy();
  await page.goto(url);
});

When('I click link {string}', async ({ page }, name) => {
  const link = page.getByRole('link', { name });
  await link.waitFor({ state: 'visible', timeout: 5000 });
  await link.click();
});

Then('I see in title {string}', async ({ page }, keyword) => {
  const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  await expect(page).toHaveTitle(new RegExp(escapedKeyword), { timeout: 5000 });
});
