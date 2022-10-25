




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



// let names2 = "Sayed 1spam 2spam spam1 spam2 5spam Aspamo";

// let spamReg = /(\bspam|spam\b)/gi;

// console.log(names2.match(spamReg));

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





// let myString = "we love programming";
// let names = "ahmedz mohamedz sara kareemz fawzyz";

// console.log(/ing$/ig.test(myString));
// console.log(/^we/ig.test(myString));

// console.log(names.match(/\w{7}(?=z)/));

// //getting the word which ends with ing
// console.log(myString.match(/\w+ing/ig));

// // string ending with z
// let endingWithz = /^(.*[^z])\z$/ig;
// // ending with z

// console.log(names.match(endingWithz));




// var myarr = [1,2,"abc",,,90,101,[55,"mno",false],10];

// // console.log(myarr[7]);

// myarr[7][8] = "hello";


// console.log(myarr);


// console.log(myarr[7].length)

// var arr2 = [1,2,3,5,8,9,1,0,10,11,12,13];

// console.log(arr2.join("*"));


// var arr3 = new Array(1,2,5,6,7,8,9);
// arr3.pop();
// arr3.push("end");
// console.log(arr3);


// var arr4 = [1,2,3,4,5,6,7,8,9];
// arr4.shift();
// console.log(arr4);


// var arr5 = [1,2,3,4,5,6,7,8,9];
// arr5.unshift("start");
// console.log(arr5);

// var arr6 = [1,2,3,4,5,6,7,8,9];
// console.log(arr6.reverse());



// let arr7 = [7,8,9,10,2,4,51,3,8];

// console.log(arr7.sort( (a,b) => a-b));

// let associativeArray = new Array();
// associativeArray["user name"] = "ahmed";
// associativeArray["student grade"] = 50;
// associativeArray["final grade"] = 60;
// associativeArray["id"] = 125642;
// associativeArray["enrolled"] = true;

// let map_counter = 0;

// for (key in associativeArray){
//     console.log(key + " : "+associativeArray[key]);
//     map_counter++;
// }
// console.log("map counter = "+map_counter);








// let today = new Date();

// //get the day 
// console.log(today.getDate());

// //get the month
// console.log(today.getMonth()+1);

// //get the year
// console.log(today.getFullYear());



// // setting the day
// console.log(today.setDate(5));
// console.log(today.toDateString());
// console.log("hello");





// var error = new Error("custom error");
// var response = parseInt(prompt("Enter value within range 10 to 25"));

// try{
//     if (response < 10)
//         throw "less than expected";
//     else if(response > 25)
//         throw RangeError("out of range error");
//     else
//         alert("value entered is within range");
// }catch(error){

//     if(error instanceof RangeError){
//         console.log("Range Error");
//         console.log(error.name);
//         console.log(error.message);
//     }
//     else if (error == "less than expected"){
//         console.log("Less Than Expected Error");
//     }




//     console.log("Exception Caught");
// }
// finally{
//     console.log("Finally Takes Place");
// }

// console.log("Done");








// onerror = errorHandler;

// function errorHandler(msg,url,l,col,err){
//     let newLine = "<br>";
//     document.write(msg + newLine);
//     document.write(url + newLine);
//     document.write(l + newLine);
//     document.write(col + newLine);
//     document.write(err + newLine);
//     return false;
// }



// var response = parseInt(prompt("Enter value within range 10 to 25"));


// if (response < 10)
//     throw "less than expected";
// else if(response > 25)
//     throw RangeError("out of range error");
// else
//     alert("value entered is within range");



// console.log("Done");


// Anonymous function 


// var myfun = function(a,b){
//     return a+b;
// }

// console.log(myfun(5,4));


// console.log(func1(5,5));

// function func1(a,b){
//     return a*b;
// }




// var arr8 = [1,2,"abc",function(a,b){return a*b},false];

// console.log(arr8[3](5,3));




// function newAddingfunction(x,y,z){

//     return function(){
//         return x + y + z;
//     }


// }


// var resultAddingfunction = newAddingfunction(5,5,20);
// console.log(resultAddingfunction());


//constructor creation
// var obj = new Object();
// obj.name = "ahmed";
// obj.age = 26;
// obj.id = 55662;


// //leiteral creation
// var obj2 = {};
// obj2.objName = "sara";
// obj2.age = 24;
// obj2.id = 33669;
// obj2.display = function(){
//     return "this function of an object";
// }

// obj2["display_years"] =function(){
//     return "1998 years old";
// } 

// var location = "12645 st.";

// obj2.loc = location;
// obj2[location] = "cairo";

// console.log(obj2[location]);



// var customObject = { 
//     name:"ahmed",
//     age:26,
//     profession:"software engineer",
//     live:"cairo",
//     info:function(){
//         return "this is " + this.name + " he is "+this.age + " years old "+ "working as "+this.profession + " lives in "+this.live;
//     }
// }

// console.log(customObject.info());




// //factory method

// function employee(name,department,salary){
//     return {
//         employeeName:name,
//         employeeDepartment:department,
//         employeeSalary:salary,
//         employeeInfo:function(){
//             return "this is "+this.employeeName + " his department : "+this.employeeDepartment+ " his salary : "+this.employeeSalary;
//         }
//     }

// }


// var emp1 = employee("ahmed","SD",6000);

// console.log(emp1.employeeInfo());





// //constructor method

// function Employee(name,department,salary){
//     this.empName = name;
//     this.empDepartment = department;
//     this.empSalary = salary;
// }



// var emp2 = new Employee("ahmed","Software Engineering",8000);
// console.log(emp2);

// let flag = emp2.hasOwnProperty("empName");
// console.log(flag);
// console.log(emp2.toString());

// console.log(Object.keys(emp2));
// console.log(Object.values(emp2));

// delete emp2.empName;

// for (keys in emp2){
//     console.log(keys + ":"+emp2[keys]);

// }



// var myObject = {
//     name:"ahmed",
//     age:26,
//     department:"SW",

// }

// Object.defineProperties(myObject,{
//     name:{writable:false,value:"ahmed",enumerable:false,configurable:false,},
//     age:{writable:false},
//     department:{},

// })

// myObject.name = "sara";
// myObject.age = 55;
// console.log(myObject.age + "Done");




// var employeeObject = {
//     empName : "sara",
//     empCertificate:"urban and regional planning",
//     empAge : 24,
// }

function employeeFactory(name,certificate,age){

    return{
        empName:name,
        empCertificate:certificate,
        empAge:age,
        
    }

}

// var newEmployee = employeeFactory("sara","urban and regional planning",24);
// console.log(newEmployee.empInfo());




// data descriptors

// var object_to_be_described = {
//     name:"kawsr",
//     certificate:"commerce",
//     age:30,
// }


var newEmployee2 = employeeFactory("kawsr","commerce",30);

Object.defineProperties(newEmployee2,{
    empName:{
        writable:false,
        configurable:false,
        enumerable:true,
        value:"kawser",
    },
    empCertificate:{
        writable:true,
        configurable:true,
        enumerable:true,
        value:"commerce",
    },
    empAge:{
        writable:false,
        configurable:false,
        enumerable:false,
        value:50,
    },
    displayInfo:{
        get:function(){
            return "empName : "+this.empName + '\n' + "empCertificate : "+this.empCertificate +'\n'+ "empAge : "+this.empAge;
        }
    }

});


// console.log(newEmployee2.displayInfo);


// const objects




// Object.freeze vs Object.seal

// making object properities immutable

//freeze
// const constObject = {name:"teto",age:60};
// Object.freeze(constObject);
// constObject.name = "ahmed";
// console.log(constObject);


//seal
// const anotherObject = {name:"katkot",age:36};
// Object.seal(anotherObject);
// anotherObject.address = "12645st.";
// console.log(anotherObject);
// anotherObject.name="tego";
// console.log(anotherObject);

//preventExtension
// we cannot add new prop only update and delete 

// const lastObject = {name:"kate",age:333};
// Object.preventExtensions(lastObject);
// console.log(lastObject);
// lastObject.id = 5;
// console.log(lastObject);
// delete lastObject.name;
// console.log(lastObject);


// var myFunction = new Function('a','b','return a + b;');



//anonymous function
// (function(){
//     console.log(500);

// });

//anonymous function called once
// (function(){
//     console.log("hello world");

// })();


//arguments

// var funArgs = function(){
//     // console.log(arguments.length);
//     let sum = 0;
//     for (arg in arguments){
//         sum += arguments[arg];
//     }
//     return sum;
// }


// console.log(funArgs(10,10,10,10));




// var str = "this is javascript";
// console.log([].join.apply(str,["*"]));

// var str2 = "this is another string";
// console.log([].join.call(str2,"-"));


// var result = [].join.bind(str2);
// console.log(result("__"));



// function outer(){
//     function innerFunction(){
//         return 5 + 2;
//     }
//     return innerFunction();
// }



// var res = outer();
// console.log(res);



// //closures


// function outerFun(outerVariable){
//     return function innerFun(innerVariable){

//         console.log("outerVariable : " + outerVariable);
//         console.log("innerVariable : " + innerVariable);
        

//     };
// }


// var newFunVariable = outerFun(10);

// newFunVariable(5);





// let myname = "hamada";

// function displayName(){
//     console.log(myname);
// }

// myname = "hamood";

// displayName();







// function newOuterFunction(){
//    var arr = [];

//     for (var i = 0; i < 3; i++) {
        
//         // if we pushed function only it will not push each index because it hasnt been called at all
//         arr.push(
//             //immediatly invoked function expression

//             //completely isolated
//             (function(index){
//                 return function(){
//                     console.log(index);
//                 }

//             })(i));

//     }
//     return arr;
// }

// var arr = newOuterFunction();
// var functionIndex = 0;
// while(functionIndex < arr.length){
//     arr[functionIndex]();
//     functionIndex++;
// }



//making private variables like counter which we can use only through f1 function 

var increment = (function(){
    //private variable
    let counter = 0;
    return function displayIncrement(){
        counter++;
        console.log("hello "+counter);
    };
})();


var callFunction = 0;
while(callFunction < 10){
    increment();
    callFunction++;
}


// making module pattern

var score = (()=>{
    let count = 0;
    return{
        current: () => {return count;},
        increment: () => {count++;},
        decrement:function(){count--;},
        reset:function(){count = 0;},
    }
})();



console.log(score.current());
score.increment();

console.log(score.current());
score.increment();

console.log(score.current());
score.decrement();
console.log(score.current());

score.reset();
console.log(score.current());













