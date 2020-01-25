let text = "abla123buda123456789dada123drr123456789";

var res = text.replace(/([0-9]{3})([0-9]{6})/g, '###$2');

console.log(text);
console.log(res);


