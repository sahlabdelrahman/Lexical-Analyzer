function isNumber(str) {
  return /^-?[0-9]+(?:\.[0-9]+)?$/.test(str + "");
}

export default isNumber;
