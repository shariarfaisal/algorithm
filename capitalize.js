const string = "My name is Faisal. I am from Feni. I am a student of Telecommunication Technology at Feni Computer Institute"

const capitalize = (str) => {
  str = str.split(' ')
  const result = str.map(i => {
    return i[0].toUpperCase().concat(i.substr(1))
  })
  return result.join(' ')
}

console.log(capitalize(string));
