function isBalanced(s: string): string {
  const map = new Map([['(', ')'], ['[', ']'], ['{', '}']]);
  const stack: string[] = [];
  for(let c of s){
    if(map.has(c)) stack.push(c)
    else if(map.get(stack.pop()!) !== c){
      return "NO"
    }
  }
  return stack.length > 0 ? "NO" : "YES"
}