let text = "abla123buda123456789dada123drr123456789";

var res = text.replace(/[0-9]{9}/gi, (text) => {
    let changedText='###'+text.substr(3);
    return changedText;
});

console.log(text);
console.log(res);


