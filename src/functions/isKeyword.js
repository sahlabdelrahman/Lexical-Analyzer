function isKeyword(str) {
  const keywords = [
    "if",
    "else",
    "while",
    "do",
    "break",
    "continue",
    "int",
    "double",
    "float",
    "return",
    "char",
    "case",
    "long",
    "short",
    "typedef",
    "switch",
    "unsigned",
    "void",
    "static",
    "struct",
    "sizeof",
    "long",
    "volatile",
    "typedef",
    "enum",
    "const",
    "union",
    "extern",
    "bool",
  ];

  return keywords.includes(str);
}
export default isKeyword;
