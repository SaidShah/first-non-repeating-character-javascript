function firstNotRepeatingCharacter(s) {

    for(let i = 0 ; i < s.length; i++){
        let str = s[i]
        if(!s.replace(s[i]," ").includes(str)){
            return s[i]
        }

    }
   return '_'
}

console.log(firstNotRepeatingCharacter("abacabad"))
console.log(firstNotRepeatingCharacter("abacabaabacaba"))
console.log(firstNotRepeatingCharacter("abcdefghijklmnopqrstuvwxyziflskecznslkjfabe"))
