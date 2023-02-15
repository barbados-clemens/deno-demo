import { denoLibOne } from './deno-lib-one.ts';
import { assertEquals } from 'https://deno.land/std@0.172.0/testing/asserts.ts';

Deno.test('should return "deno-lib-one"', () => {
  assertEquals(denoLibOne(), 'deno-lib-one');
});
