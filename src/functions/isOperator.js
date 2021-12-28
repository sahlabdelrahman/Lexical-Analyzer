function isOperator(str) {
  const operators = [
    "(",
    ")",
    "{",
    "}",
    "+",
    "-",
    "*",
    "/",
    "%",
    "=",
    ":",
    ";",
    ",",
    ".",
    "&",
    "&&",
    "||",
    ">",
    "<",
    "==",
    ">=",
    "<=",
    "!=",
    "<>",
    "+=",
    "-=",
    "*=",
    "/=",
    "++",
    "--",
  ];
  return operators.includes(str);
}

export default isOperator;
