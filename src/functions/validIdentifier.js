import isPunc from "./isPunc";

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

export default validIdentifier;
