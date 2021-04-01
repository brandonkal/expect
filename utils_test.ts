import {
  assert,
  assertEquals,
} from "https://deno.land/std@0.79.0/testing/asserts.ts";
import { isPromise } from "./utils.ts";

Deno.test({
  name: "utils.isPromise",
  fn: async () => {
    const p = new Promise(() => {});
    assert(isPromise(p));
  },
});
