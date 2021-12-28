function isPunc(str) {
  const puncs = [
    " ",
    "+",
    "-",
    "*",
    "/",
    ",",
    ";",
    ">",
    "<",
    "=",
    "(",
    ")",
    "[",
    "]",
    "{",
    "}",
    "&",
    "|",
  ];

  return puncs.includes(str);
}

export default isPunc;
