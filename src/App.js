// import { useState } from "react";
import "./App.css";

function App() {
  let tokens = [];

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

  function isNumber(str) {
    return /^-?[0-9]+(?:\.[0-9]+)?$/.test(str + "");
  }

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

  function validIdentifier(str) {
    if (
      str[0] === "0" ||
      str[0] === "1" ||
      str[0] === "2" ||
      str[0] === "3" ||
      str[0] === "4" ||
      str[0] === "5" ||
      str[0] === "6" ||
      str[0] === "7" ||
      str[0] === "8" ||
      str[0] === "9" ||
      isPunc(str[0]) === true
    ) {
      return false;
    }

    if (str.length === 1) {
      return true;
    } else {
      for (let i = 1; i < str.length; i++) {
        if (isPunc(str[i] === true)) {
          return false;
        }
      }
    }
    return true;
  }

  function parse(str) {
    str.forEach((element) => {
      // console.log(element, "=>", element.length);

      if (element.length > 1) {
        if (isKeyword(element) === true) {
          tokens.push({ [element]: "IS A KEYWORD" });
        } else if (isOperator(element) === true) {
          tokens.push({ [element]: "IS AN OPERATOR" });
        } else if (validIdentifier(element) === true) {
          tokens.push({ [element]: "IS A VALID IDENTIFIER" });
        } else if (isNumber(element) === true) {
          tokens.push({ [element]: "IS A Number" });
        } else if (validIdentifier(element) === false && true) {
          tokens.push({ [element]: "IS NOT A VALID IDENTIFIER" });
        } else {
          let substr = element.trim().split("");
          console.log(substr);
        }
      } else {
        if (validIdentifier(element) === true) {
          tokens.push({ [element]: "IS A VALID IDENTIFIER" });
        } else if (isOperator(element) === true) {
          tokens.push({ [element]: "IS AN OPERATOR" });
        } else if (isNumber(element) === true) {
          tokens.push({ [element]: "IS A Number" });
        }
      }
    });
    console.log(tokens);
  }

  let str = "if(x = 5)".trim().split(" ");

  parse(str);

  return <div className="App">Hello</div>;
}

export default App;
