# expect for deno

![deno-ci](https://github.com/Soontao/expect/workflows/deno-ci/badge.svg?branch=main)

A deno implementation of `expect` in order to write tests in a more `jest` like style.

```typescript
import { expect } from "https://cdn.jsdelivr.net/gh/Soontao/expect@0.2.2/mod.ts";

expect(10).toEqual(10);
expect(Promise.resolve(20)).resolves.toEqual(20);
```
