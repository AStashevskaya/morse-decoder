const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = []
  let letter
  for(let i = 0; i < expr.length; i += 10){
    letter = expr.slice(i, i + 10)
    arr.push(letter)
  }
  arr = arr.map(el => {
    if (el.includes('*')) return ' '
    let simbols = []
    let simb
    for(let i = 0; i < el.length; i += 2){
     simb = el.slice(i, i+2)
     simbols.push(simb)
    }
    simbols = simbols.filter(el => el !== '00').map(item => item === '11' ? item = '-' : item = '.')
    return simbols.join('')
  })
  console.log(arr)
    arr = arr.map(el => {
    if (el === ' ') return el
    for(let key in MORSE_TABLE){
      if(key === el){
        el = MORSE_TABLE[key]
        return el
      }
    }
  })
  return arr.join('')
}

module.exports = {
    decode
}