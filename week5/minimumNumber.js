// Given the string she typed, can you find the minimum number of characters she must add to make her p strong?

function minimumNumber(n, p) {
  // Return the minimum number of characters to make the password strong
  return Math.max(6 - p.length, !/[A-Z]/.test(p) + !/[a-z]/.test(p) + !/\d/.test(p) + !/[!@#$%^&*()\-+]/.test(p))
}