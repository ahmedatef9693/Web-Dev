
var win;


function openNewWin(){
    
    //making window child
    win = window.open("childWindow.html","myWindow","width = 150px , height = 150px");
    
}

function closeNewWin(){
    //closing window child
    win.close();
}


function movingWindow(){
    win.moveBy(50,50);
    win.focus();
}


function startTimeout(){
    setTimeout(function(){alert("alert fired here");},4000);
}

var timeID;
function startTimeInterval(x){
    timeID = setInterval(function(){alert("alert fired here"+x++);},4000);
}

function stopTimeInterval(){
    clearInterval(timeID);
    // clearTimeout(timeID);

}

var timeID2;

function startTimeout2(x){

    alert("alert 2 is working"+ x);
    x++;
    timeID2 = setTimeout(startTimeout2,3000,x);
}

function stopTimout2(){
    clearTimeout(timeID2)

}

function getHistory(){
    // console.log(history.length);
    document.write(history.length);
}

function gotoPage(){
    //go to second page in history
    history.go(2);
}


function getType(){
    let userAgent = navigator.userAgent;
    let browserType = "";

    if(userAgent.match(/edg/i)){
        browserType = "edge";
    }
    else if(userAgent.match(/firefox|fxios/i)){
        browserType = "firefox";
    }
    else if(userAgent.match(/opr/i)){
        browserType = "opera";
    }
    else if(userAgent.match(/chrome|chromium|crios/i)){
        browserType = "chrome";
    }
    else if(userAgent.match(/safari/i)){
        browserType = "safari";
    }else{
        alert('Unknown Browser')
    }
    console.log(browserType);
    document.write(browserType);


}

