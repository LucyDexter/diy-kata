const numberToReversedDigits = (number) => {
   const numberToString = number.toString();
return numberToString.split("").reverse().join("");
}

module.exports = numberToReversedDigits;
