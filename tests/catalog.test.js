import test from 'node:test';
import assert from 'node:assert/strict';
import { categories, getProduct, products } from '../data.js';
test('keeps the 20 public catalogue entries', () => assert.equal(products.length, 20));
test('every product has an available category and non-negative demo price', () => products.forEach(p => { assert.ok(categories.includes(p.category)); assert.ok(p.price >= 0); }));
test('principal public product can be located', () => assert.equal(getProduct('extra-virgin-500').price, 42));
