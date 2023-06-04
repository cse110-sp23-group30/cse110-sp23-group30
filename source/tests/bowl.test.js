const puppeteer = require("puppeteer");
const path = require("path");

let browser, page;

beforeAll(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
});

afterAll(async () => {
  await browser.close();
});

describe("Bowl Screen Tests", () => {
  test("User can select a Main", async () => {
    await page.goto(
      "file://" + path.resolve(__dirname, "../bowl-screen/bowl-screen.html")
    );

    // Select the first menu-card under mains
    await page.click("form .menu-card:nth-child(1)");

    const selectedImage = await page.$eval(
      "form .menu-card:nth-child(1)",
      (el) => el.classList.contains("selected")
    );
    expect(selectedImage).toBe(true);
  });

  test("User can select an Entree", async () => {
    await page.goto(
      "file://" + path.resolve(__dirname, "../bowl-screen/bowl-screen.html")
    );

    // Select the first menu-card under entrees
    await page.click("form .menu-card:nth-child(5)");

    const selectedImageEntree = await page.$eval(
      "form .menu-card:nth-child(5)",
      (el) => el.classList.contains("selected")
    );
    expect(selectedImageEntree).toBe(true);
  });

  test("User can navigate to cart", async () => {
    await page.goto(
      "file://" + path.resolve(__dirname, "../bowl-screen/bowl-screen.html")
    );

    // click the cart button
    await Promise.all([
      page.waitForNavigation(), // The promise resolves after navigation has finished
      page.click("button"), // Clicking the link will indirectly cause a navigation
    ]);

    // get the current url
    const url = await page.url();

    // check the url contains 'cart.html'
    expect(url).toContain("cart.html");
  });
});
