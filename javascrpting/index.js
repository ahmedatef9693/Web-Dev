




var mystr = "schello javascript";
// console.log(mystr.substring(6,16));



// console.log(mystr.split(""));

console.log(mystr.replace(/sc/g,"_"));




let tld = "com org net info code io";

let tldregx = /(info|code|net)/;

console.log(tld.match(tldregx));



let num = "12345678910";
let numReg = /[0-2]/g;

console.log(num.match(numReg));






let practice = "Os1 Os10s Os2 Os8 Os8Os";

let practiceReg = /Os[5-9]Os/;

console.log(practice.match(practiceReg));


let letters = "AbcdefGHJKLSabcdefghigklmnopqrstuvwxyz";

let lettersReg =/[a-z]/gi;

console.log(letters.match(lettersReg));



let mails = "o@@@@g....com o@g.com o@g.net A@Y.com o-g.com o@s.org 1@1.com";


let mailReg = /[a-z]@[a-z|0-9].(com|net)/gi;

console.log(mails.match(mailReg));



let names2 = "Sayed 1spam 2spam spam1 spam2 5spam Aspamo";

let spamReg = /(\bspam|spam\b)/gi;

console.log(names2.match(spamReg));

console.log(spamReg.test("ahmed"));



let completeMails = "mido307@gmail.com ahmed55@gmail.com a@@@55.com";


let completeMailsRegx = /\w+@\w+.\w+/g;

console.log(completeMails.match(completeMailsRegx));





let nums = "0110 10 150 05120 0560 350 00";

let numsRegExpr = /0\d*0/ig;
console.log(nums.match(numsRegExpr));


let fullnameWebsites = "https://google.com http://www.website.net web.com";

let fullnameWebsitesRegx = /https?:\/\/(www.)?\w+.\w+/ig;

console.log(fullnameWebsites.match(fullnameWebsitesRegx));





let myString = "we love programming";
let names = "ahmedz mohamedz sara kareemz fawzyz";

console.log(/ing$/ig.test(myString));
console.log(/^we/ig.test(myString));

console.log(names.match(/\w{7}(?=z)/));

//getting the word which ends with ing
console.log(myString.match(/\w+ing/ig));

// string ending with z
let endingWithz = /^(.*[^z])\z$/ig;
// ending with z

console.log(names.match(endingWithz));




var myarr = [1,2,"abc",,,90,101,[55,"mno",false],10];

// console.log(myarr[7]);

myarr[7][8] = "hello";


console.log(myarr);


console.log(myarr[7].length)

var arr2 = [1,2,3,5,8,9,1,0,10,11,12,13];

console.log(arr2.join("*"));


var arr3 = new Array(1,2,5,6,7,8,9);
arr3.pop();
arr3.push("end");
console.log(arr3);


var arr4 = [1,2,3,4,5,6,7,8,9];
arr4.shift();
console.log(arr4);


var arr5 = [1,2,3,4,5,6,7,8,9];
arr5.unshift("start");
console.log(arr5);

var arr6 = [1,2,3,4,5,6,7,8,9];
console.log(arr6.reverse());



let arr7 = [7,8,9,10,2,4,51,3,8];

console.log(arr7.sort( (a,b) => a-b));

let associativeArray = new Array();
associativeArray["user name"] = "ahmed";
associativeArray["student grade"] = 50;
associativeArray["final grade"] = 60;
associativeArray["id"] = 125642;
associativeArray["enrolled"] = true;

let map_counter = 0;

for (key in associativeArray){
    console.log(key + " : "+associativeArray[key]);
    map_counter++;
}
console.log("map counter = "+map_counter);








let today = new Date();

//get the day 
console.log(today.getDate());

//get the month
console.log(today.getMonth()+1);

//get the year
console.log(today.getFullYear());



// setting the day
console.log(today.setDate(5));
console.log(today.toDateString());
console.log("hello");



var error = new Error("custom error");

var response = parseInt(prompt("Enter value within range 10 to 25"));

try{
    if (response < 10)
        throw "less than expected";
    else if(response > 25)
        throw RangeError("out of range error");
    else
        alert("value entered is within range");
}catch(error){

    if(error instanceof RangeError){
        console.log("Range Error");
        console.log(error.name);
        console.log(error.message);
    }
    else if (error == "less than expected"){
        console.log("Less Than Expected Error");
    }




    console.log("Exception Caught");
}
finally{
    console.log("Finally Takes Place");
}

console.log("Done");







