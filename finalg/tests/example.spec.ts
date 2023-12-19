import { test, expect } from '@playwright/test';

test('Navbar renders correctly', async ({ page }) => {
  await page.goto('https://final-group-2023.vercel.app/'); // Adjust the URL to your application's URL
  const navbar = await page.locator('nav');
  expect(await navbar.isVisible()).toBeTruthy();
});

test('Logo image loads correctly', async ({ page }) => {
  await page.goto('https://final-group-2023.vercel.app/');
  const logoImage = page.locator('nav >> img[alt="Your Brand Logo"]');

  // Wait for the image to be visible with an increased timeout
  await logoImage.waitFor({ state: 'visible', timeout: 50000 });

  // Assert that the image is visible
  await expect(logoImage).toBeVisible();
});

test('Navigate to Home section', async ({ page }) => {
  await page.goto('https://final-group-2023.vercel.app/');
  await page.click('text=HOME');
  await expect(page.locator('#Home')).toBeVisible();
});

test('Navigate to Menu section', async ({ page }) => {
  await page.goto('https://final-group-2023.vercel.app/');
  await page.click('text=MENU');
  await expect(page.locator('#Home')).toBeVisible();
});

test('Navigate to Aboutus section', async ({ page }) => {
  await page.goto('https://final-group-2023.vercel.app/');
  await page.click('text=ABOUT');
  await expect(page.locator('#Home')).toBeVisible();
});

test('Page is accessible', async ({ page }) => {
  await page.goto('https://final-group-2023.vercel.app/about-us');
  await expect(await page.accessibility.snapshot()).toBeTruthy();
});

const titles = [
  "True Mocha", "Latte", "Long Black", 
  "Iced Espresso", "Cold Coffee Creme", "Brookie Creme", 
  "Peanut Butter Creme", "Chocolate Cake", "Strawberry Cake", 
  "Basque Cheesecake"
];

for (const title of titles) {
  test(`should display the card with title "${title}"`, async ({ page }) => {  // Corrected to use backticks
    await page.goto('https://final-group-2023.vercel.app/'); // Navigate to the page where the titles are expected to be
    const cardTitle = page.locator(`text=${title}`); // Corrected to use backticks
    await cardTitle.waitFor({ state: 'visible', timeout: 10000 }); // Optionally increase timeout if needed
    await expect(cardTitle).toBeVisible();
  });
}

test('should render the cards in a grid layout', async ({ page }) => {
  await page.goto('https://final-group-2023.vercel.app/');
  await page.waitForLoadState('networkidle'); // Wait for network to be idle

  // Take a screenshot for debugging
  await page.screenshot({ path: 'test-failure.png' });

  const gridLayout = page.locator('div.grid');
  await expect(gridLayout).toBeVisible();
});


test('should render the Cards component with the main title', async ({ page }) => {
  await page.goto('https://final-group-2023.vercel.app/'); // Replace with the URL where Cards component is rendered
  const mainTitle = page.locator('h2:has-text("I LOVE COFFEE")');
  await expect(mainTitle).toBeVisible();
});



test('should display the main heading "ABOUT US"', async ({ page }) => {
  await page.goto('https://final-group-2023.vercel.app/');
  const heading = page.locator('h2:has-text("ABOUT US")');
  await expect(heading).toBeVisible();
});

test('should display the left side image', async ({ page }) => {
  await page.goto('https://final-group-2023.vercel.app/');
  const leftImage = page.locator('img[alt="Coffee Shop"]');
  await expect(leftImage).toBeVisible();
});

