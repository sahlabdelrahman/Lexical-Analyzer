import isOperator from "./isOperator";

function Parser(str) {
  str = str.trim().split("\n");
  let arr = [""];
  let tmp = [];

  for (let j = 0; j < str.length; j++) {
    tmp = str[j].split("");
    for (let i = 0; i < tmp.length; i++) {
      if (/^(["][^"]$)|^(['][^']$)/g.test(arr[arr.length - 1])) {
        arr[arr.length - 1] += tmp[i];
      } else if (isOperator(arr[arr.length - 2] + tmp[i])) {
        arr[arr.length - 2] += tmp[i];
      } else if (isOperator(tmp[i])) {
        if (arr[arr.length - 1] !== "") {
          arr.push(tmp[i]);
        } else {
          arr[arr.length - 1] += tmp[i];
        }
        arr.push("");
      } else if (tmp[i] === " " && arr[arr.length - 1] !== "") {
        arr.push("");
      } else if (tmp[i] === " ") {
        continue;
      } else {
        arr[arr.length - 1] += tmp[i];
      }
    }
  }
  return arr;
}

export default Parser;
