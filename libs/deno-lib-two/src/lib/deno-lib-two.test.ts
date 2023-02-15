import { denoLibTwo } from './deno-lib-two.ts';
import { assertEquals } from 'https://deno.land/std@0.172.0/testing/asserts.ts';

Deno.test('should return "deno-lib-two"', () => {
  assertEquals(denoLibTwo(), 'deno-lib-two');
});
