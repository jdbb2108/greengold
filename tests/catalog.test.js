import test from 'node:test';
import assert from 'node:assert/strict';
import { categories, convertPrice, currencies, getProduct, products } from '../data.js';
test('keeps the 20 public catalogue entries', () => assert.equal(products.length, 20));
test('every product has an available category and non-negative demo price', () => products.forEach(p => { assert.ok(categories.includes(p.category)); assert.ok(p.price >= 0); }));
test('principal public product can be located', () => assert.equal(getProduct('extra-virgin-500').price, 42));
test('all recovered catalogue products have a Wix product image', () => products.forEach(p => assert.match(p.image, /^https:\/\/static\.wixstatic\.com\/media\//)));
test('currency conversions are centralised for USD, NZD and HUF', () => {
  assert.deepEqual(Object.keys(currencies), ['USD', 'NZD', 'HUF']);
  assert.equal(convertPrice(42, 'USD'), 42);
  assert.equal(convertPrice(42, 'NZD'), 68.46);
  assert.equal(convertPrice(42, 'HUF'), 15330);
});
