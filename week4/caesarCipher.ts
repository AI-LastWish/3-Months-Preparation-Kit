const SMALL = "abcdefghijklmnopqrstuvwxyz"
const CAPITAL = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function caesarCipher(s: string, k: number): string {
    // Write your code here
    let encripted = ""
    for(let i of s) {
        const si = SMALL.indexOf(i), ci = CAPITAL.indexOf(i)
        if(si !== -1) encripted += SMALL[(si + k) % 26]
        else if(ci !== -1) encripted += CAPITAL[(ci +k) % 26]
        else encripted += i
    }
    return encripted
}