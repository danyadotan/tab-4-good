import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    window.__spoken = [];
    class MockUtterance {
      constructor(text) { this.text = text; }
    }
    window.SpeechSynthesisUtterance = MockUtterance;
    Object.defineProperty(window, 'speechSynthesis', {
      configurable: true,
      value: {
        cancel() {},
        speak(utterance) { window.__spoken.push(utterance.text); },
      },
    });
  });
  await page.goto('/');
});

test('assistant navigates to a requested section', async ({ page }) => {
  await page.getByTestId('tab-assistant-trigger').first().click();
  await page.getByLabel('Message TAB').fill('Go to founder');
  await page.getByLabel('Send message').click();
  await expect(page).toHaveURL(/#founder$/);
  await expect(page.locator('#founder')).toBeInViewport();
});

test('assistant starts speech synthesis', async ({ page }) => {
  await page.getByTestId('tab-assistant-trigger').first().click();
  await page.getByRole('button', { name: 'Listen', exact: true }).click();
  await expect.poll(() => page.evaluate(() => window.__spoken.length)).toBe(1);
  const spoken = await page.evaluate(() => window.__spoken[0]);
  expect(spoken).toContain('execution-recovery layer');
});

test('conversational capture prefills the shared contact form', async ({ page }) => {
  await page.getByTestId('tab-assistant-trigger').first().click();
  await page.getByRole('button', { name: 'Design partnership', exact: true }).click();
  for (const value of ['Danya Dotan', 'Bridge-iT', 'danya@dynamicbridge.io', 'Agent output review keeps becoming a human bottleneck.']) {
    await page.getByLabel('Message TAB').fill(value);
    await page.getByLabel('Send message').click();
  }
  await expect(page.getByTestId('contact-form')).toBeVisible();
  await expect(page.locator('input[name="name"]')).toHaveValue('Danya Dotan');
  await expect(page.locator('input[name="company"]')).toHaveValue('Bridge-iT');
  await expect(page.locator('input[name="email"]')).toHaveValue('danya@dynamicbridge.io');
  await expect(page.locator('textarea[name="note"]')).toHaveValue(/human bottleneck/);
});

test('investor PDF download is present', async ({ page }) => {
  const link = page.getByRole('link', { name: 'Download investor brief (PDF)' });
  await expect(link).toHaveAttribute('href', '/TAB-Work-Investor-Brief.pdf');
  const response = await page.request.get('/TAB-Work-Investor-Brief.pdf');
  expect(response.ok()).toBeTruthy();
  expect(response.headers()['content-type']).toContain('application/pdf');
});
