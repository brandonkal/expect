/**
 * check function is promise instance
 * 
 * @param v 
 * @returns 
 */
export function isPromise(v: any): v is Promise<any> {
  if (
    typeof v === "object" && typeof v.then === "function" &&
    typeof v.catch === "function"
  ) {
    return true;
  }
  return false;
}
