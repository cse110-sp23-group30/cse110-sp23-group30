describe('Cart Page', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:4444/source/cart_screen/cart.html');
  });

  test('Add Plate button redirects to the correct page', async () => {
    await Promise.all([
      page.click('#add-plate'),
      page.waitForNavigation({ waitUntil: 'networkidle0' }),
    ]);
    expect(await page.url()).toContain('/source/plate-screen/plate-screen.html');
  });

  test('Add Bowl button redirects to the correct page', async () => {
    await page.goBack();
    await page.waitForSelector('#add-bowl');
    await page.click('#add-bowl');
    expect(await page.url()).toContain('/source/bowl-screen/bowl-screen.html'); // adjust as necessary
  });

  test('Confirm Purchase button redirects to the correct page', async () => {
    await page.goBack();
    await page.waitForSelector('#confirm');
    await page.click('#confirm');
    expect(await page.url()).toContain('/source/cookie_screen/cookie_screen.html'); // adjust as necessary
  });

  test('Clear Cart button pops up the confirm-clear element', async () => {
    await page.goBack();
    await page.waitForSelector('#clear');
    await page.click('#clear');
    const displayStyle = await page.$eval('#confirm-clear', el => getComputedStyle(el).display);
    expect(displayStyle).toBe('block');
  });

  test('Delete button pops up the confirm-delete element', async () => {
    // This test assumes that there is at least one delete button (class = "deletebtn") on the page
    await page.waitForSelector('.deletebtn');
    await page.click('.deletebtn');
    const displayStyle = await page.$eval('#confirm-delete', el => getComputedStyle(el).display);
    expect(displayStyle).toBe('block');
  });
});
