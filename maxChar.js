const time = new Date()

const character = "My name is Faisal. I am a student of Telecommunication Technology at Feni Computer Institute."

const str = character.split('').filter(i => i === " "? false : i).join('')


function maxChar(str){
  let charCountObj = {}
  let maxChar = ""
  let maxCount = 0

  for(let i=0; i<str.length; i++){
    const char = str[i]
    charCountObj[char] = charCountObj[char] + 1 || 1

    if(charCountObj[char] > maxCount){
      maxChar = char
      maxCount = charCountObj[char]
    }
  }

  return [maxChar,maxCount]
}


console.log(maxChar(str));

console.log(new Date() - time);
