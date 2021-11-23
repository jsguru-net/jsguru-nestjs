import { applyDecorators, Render } from '@nestjs/common';

// Render /views/${path}
// Eg: views/pages/account/detail
export function View(path: string) {
  return applyDecorators(Render(`${path}`));
}
