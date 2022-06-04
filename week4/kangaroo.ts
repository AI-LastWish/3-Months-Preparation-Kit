function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
  // Write your code here
  const t = (x2 - x1) / (v1 - v2)
  return Number.isInteger(t) && t >= 0 ? "YES" : "NO"
}