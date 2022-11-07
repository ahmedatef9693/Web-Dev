



function saveCookieInfo(){

    var currentDate = new Date();
    if(document.getElementById("cbox").checked){
        //presistent cookie has an expiry date 5 months
        currentDate.setMonth(currentDate.getMonth() + 5);
    }
    var usernameCookie = document.getElementById("username").value;
    var usermailCookie = document.getElementById("usermail").value;
    document.cookie = "usernameCookie="+usernameCookie+";expires="+currentDate;
    document.cookie = "usermailCookie="+usermailCookie+";expires="+currentDate;
}

function getCookieInfo(){
    var associativeArrayCookies = [];
    var cookies = document.cookie.split(";");

    for (let index = 0; index < cookies.length; index++) {
        associativeArrayCookies[cookies[index].split("=")[0].trim()] = cookies[index].split("=")[1]; 
    }
    return associativeArrayCookies;
}


function greetingPage1(){
    var associativeArrayCookies = getCookieInfo();
    var heading1 = document.createElement("h1");
    document.body.appendChild(heading1);
    heading1.textContent = "hello to page1 : " + associativeArrayCookies["usernameCookie"] +
     "your used email : " + associativeArrayCookies["usermailCookie"]; 
}


function deleteCookies(){

    var cookies = getCookieInfo();
    for(Cookie in cookies){
        document.cookie = Cookie+"=;expires=9-9-2009";
    }
}