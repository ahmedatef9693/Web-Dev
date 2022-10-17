




// var mystr = "schello javascript";
// // console.log(mystr.substring(6,16));



// // console.log(mystr.split(""));

// console.log(mystr.replace(/sc/g,"_"));




// let tld = "com org net info code io";

// let tldregx = /(info|code|net)/;

// console.log(tld.match(tldregx));



// let num = "12345678910";
// let numReg = /[0-2]/g;

// console.log(num.match(numReg));






// let practice = "Os1 Os10s Os2 Os8 Os8Os";

// let practiceReg = /Os[5-9]Os/;

// console.log(practice.match(practiceReg));


// let letters = "AbcdefGHJKLSabcdefghigklmnopqrstuvwxyz";

// let lettersReg =/[a-z]/gi;

// console.log(letters.match(lettersReg));



// let mails = "o@@@@g....com o@g.com o@g.net A@Y.com o-g.com o@s.org 1@1.com";


// let mailReg = /[a-z]@[a-z|0-9].(com|net)/gi;

// console.log(mails.match(mailReg));



// let names = "Sayed 1spam 2spam spam1 spam2 5spam Aspamo";

// let spamReg = /(\bspam|spam\b)/gi;

// console.log(names.match(spamReg));

// console.log(spamReg.test("ahmed"));



// let completeMails = "mido307@gmail.com ahmed55@gmail.com a@@@55.com";


// let completeMailsRegx = /\w+@\w+.\w+/g;

// console.log(completeMails.match(completeMailsRegx));





// let nums = "0110 10 150 05120 0560 350 00";

// let numsRegExpr = /0\d*0/ig;
// console.log(nums.match(numsRegExpr));


// let fullnameWebsites = "https://google.com http://www.website.net web.com";

// let fullnameWebsitesRegx = /https?:\/\/(www.)?\w+.\w+/ig;

// console.log(fullnameWebsites.match(fullnameWebsitesRegx));





let myString = "we love programming";
let names = "ahmedz mohamedz sara kareemz fawzyz";

// console.log(/ing$/ig.test(myString));
// console.log(/^we/ig.test(myString));

// console.log(names.match(/\w{7}(?=z)/));

// //getting the word which ends with ing
// console.log(myString.match(/\w+ing/ig));

//string ending with z
let endingWithz = /\w+z/ig;
//ending with z

console.log(names.match(endingWithz));












