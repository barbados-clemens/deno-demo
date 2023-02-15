import { denoLibOne } from '@deno-demo/deno-lib-one';
import { denoLibTwo } from '@deno-demo/deno-lib-two';
// deno-lint-ignore require-await
export async function handler(_request: Request): Promise<Response> {
  const message = JSON.stringify({
    message: 'Hello deno-app',
    libOne: denoLibOne(),
    libTwo: denoLibTwo(),
  });
  return new Response(message, {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
  });
}
