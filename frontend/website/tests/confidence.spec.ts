import { test, expect } from '@playwright/test';
import { BUSINESS } from "../src/atoms/constants";

test('has title', async ({ page }) => {
  await page.goto(BUSINESS.WEBSITE);

  // Expect a title "to contain" a substring.
  const re = new RegExp("Building and fixing teams and processes")
  await expect(page).toHaveTitle(re);
});
