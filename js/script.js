let numOrStr = prompt("Enter number or string");

let result;
switch (numOrStr) {
  case null:
    result = "Declined by you";
    break;
  case "":
    result = "Empty String";
    break;
  case !isNaN(numOrStr) || numOrStr:
    result = "Number is Ba_NaN";
    break;
  default:
    result = "OK!";
}
console.log(result);
