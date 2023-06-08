const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../bowl-screen/bowl-screen.html'), 'utf8');

let dom;
let container;

beforeEach(() => {
  // Construct a new JSDOM instance with the bowl-screen html
  dom = new JSDOM(html, { url: 'http://localhost/' });
  container = dom.window.document;

  // Set up mock localStorage
  dom.window.localStorage = (function () {
    let store = {};
    return {
      getItem(key) {
        return store[key];
      },
      setItem(key, value) {
        store[key] = value.toString();
      },
      clear() {
        store = {};
      },
    };
  })();

  // Set up our window, document, and localStorage objects to act like they're in a browser
  global.window = dom.window;
  global.document = dom.window.document;
  global.localStorage = dom.window.localStorage;

  // Then, import our functions to test
  const { selectImage, selectImageEntree, goToCart, saveSelectedItems, getSelectedItems } = require('./bowl');
});

// Now we can write our tests...

// Now we can write our tests...

test('selectImage function', () => {
    const mockElement = {
      classList: {
        contains: jest.fn(() => false),
        add: jest.fn(),
        remove: jest.fn(),
      },
    };
  
    selectImage(mockElement);
  
    expect(mockElement.classList.add).toHaveBeenCalledWith('selected');
  });
  
  test('selectImageEntree function', () => {
    const mockElement = {
      classList: {
        contains: jest.fn(() => false),
        add: jest.fn(),
        remove: jest.fn(),
      },
    };
  
    selectImageEntree(mockElement);
  
    expect(mockElement.classList.add).toHaveBeenCalledWith('selectedEntree');
  });
  
  test('goToCart function', () => {
    const originalLocation = window.location;
    delete window.location;
    window.location = { href: jest.fn() };
  
    goToCart();
  
    expect(window.location.href).toBe('/source/cart_screen/cart.html');
  
    window.location = originalLocation;
  });
  
  test('saveSelectedItems function', () => {
    const originalLocalStorage = global.localStorage;
    global.localStorage = {
      setItem: jest.fn(),
    };
  
    // Mock getSelectedItems function
    const originalGetSelectedItems = getSelectedItems;
    getSelectedItems = jest.fn(() => []);
  
    saveSelectedItems();
  
    expect(localStorage.setItem).toHaveBeenCalled();
    expect(getSelectedItems).toHaveBeenCalledTimes(2);
  
    global.localStorage = originalLocalStorage;
    getSelectedItems = originalGetSelectedItems;
  });
  
  test('getSelectedItems function', () => {
    const mockElement = document.createElement('div');
    mockElement.classList.add('menu-card');
    mockElement.innerHTML = `<h3>Item Name</h3><p></p><p>Item Price</p>`;
    document.body.appendChild(mockElement);
  
    const selectedItems = getSelectedItems('.menu-card');
  
    expect(selectedItems).toEqual([
      { name: 'Item Name', price: 'Item Price' },
    ]);
  });
  