/* Alphabet */
var values = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

/* Cifra Code */
export const convertCodeCifra = (message, addNumber) => {
  var encryptedMessage = "";
  while (addNumber > values.length) {
    // avoid finding an index out of the array's range
    addNumber = addNumber - values.length;
  }
  for (var i = 0; i < message.length; i++) {
    if (message[i] == " ") {
      encryptedMessage += " ";
      continue;
    }
    for (var j = 0; j < values.length; j++) {
      if (message[i] == values[j]) {
        if (j + addNumber > values.length - 1) {
          // check if when adding a value the array overflows
          encryptedMessage += values[j + addNumber - values.length];
        } else {
          encryptedMessage += values[j + addNumber];
        }
      }
    }
  }
  return encryptedMessage;
};

/* Cifra Decode */
export const convertDecodeCifra = (message, addNumber) => {
  var decryptedMessage = "";
  while (addNumber > values.length) {
    // avoid finding an index out of the array's range
    addNumber = addNumber - values.length;
  }
  for (var i = 0; i < message.length; i++) {
    if (message[i] == " ") {
      decryptedMessage += " ";
      continue;
    }
    for (var j = 0; j < values.length; j++) {
      if (message[i] == values[j]) {
        if (j - addNumber < 0) {
          // check if when reducing a value the array overflows
          decryptedMessage += values[values.length - Math.abs(j - addNumber)];
        } else {
          decryptedMessage += values[j - addNumber];
        }
      }
    }
  }
  return decryptedMessage;
};
