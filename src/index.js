const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let result = "";

  for (let i = 0; i < expr.length; i += 10) {
    let str = "";
    Inner: for (let j = i; j < i + 10; j += 2) {
      let temp = "";

      temp = expr[j] + expr[j + 1];
      if (temp === "10") {
        str += ".";
      } else if (temp === "11") {
        str += "-";
      } else if (temp === "**") {
        str += " ";
        break Inner;
      }
    }
    if (str === " ") {
      result += " ";
    } else {
      result += MORSE_TABLE[str];
    }
  }
  return result;
}

module.exports = {
  decode,
};
