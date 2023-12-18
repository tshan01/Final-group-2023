import { test, expect } from '@playwright/test';

// Define the URL of your Next.js app
const appURL = 'http://localhost:3000'; // Update with your actual URL

test('Test Hero Component', async ({ page }) => {
  // Navigate to the page with the Hero component
  await page.goto(appURL);

  // Wait for the Hero component to be visible
  await page.waitForSelector('.hero');

  // Perform assertions on the Hero component
  const heroText = await page.textContent('.hero h1');
  const imageAltText = await page.getAttribute('.hero img', 'alt');

  // Replace these assertions with the expected content from your Hero component
  expect(heroText).toContain('Experience India');
  expect(imageAltText).toBe('Coffee Image');
});

test('Navbar renders correctly', async ({ page }) => {
  await page.goto('http://localhost:3000'); // Adjust the URL to your application's URL
  const navbar = await page.locator('nav');
  expect(await navbar.isVisible()).toBeTruthy();
});

