const {test, expect} = require("@playwright/test");

test('Mobile view', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667  });

    await page.goto('https://www.zalando.pl/');

    await expect(page.url()).toContain("zolando");
});

test('Tabletka view', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024  });

    await page.goto('https://www.zalando.pl/');

    await expect(page.url()).toContain("zolando");

});

test('Desktop view', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });

    await page.goto('https://www.zalando.pl/');

    await expect(page.url()).toContain("zolando");
});