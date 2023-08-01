
var count = 0,idName,i;
var array = [];

function onefunction(ele) {
    idName = ele.id;
    if(idName == "one"){
        i = 1;
    }else if(idName == "two"){
        i = 2;
    }else if(idName == "three"){
        i = 3;
    }else if(idName == "four"){
        i = 4;
    }else if(idName == "five"){
        i = 5;
    }else if(idName == "six"){
        i = 6;
    }else if(idName == "seven"){
        i = 7;
    }else if(idName == "eight"){
        i = 8;
    }else if(idName == "nine"){
        i = 9;
    }
    if(count % 2 == 0) {    
        array[i] = document.getElementById(idName).innerHTML = "✘";  
    }else if(count % 2 != 0) {
        array[i] = document.getElementById(idName).innerHTML = "0";
    }
    count++;
    i++;
    check(idName);
}



function check(idName) {
    if(idName == "one") {
        if((array[1] == array[2] && array[1] == array[3]) || (array[1] == array[4] && array[1] == array[7]) || (array[1] == array[5] && array[1] == array[9])) {
            resultCheck = true;
            result(resultCheck);
        }else if(count == 9) {
            resultCheck = false;
            result(resultCheck);
        }
    }else if(idName == "two") {
        if((array[2] == array[5] && array[2] == array[8]) || (array[2] == array[1] && array[2] == array[3])) {
            resultCheck = true;
            result(resultCheck);
        }else if(count == 9) {
            resultCheck = false;
            result(resultCheck);
        }
    }else if(idName == "three") {
        if((array[3] == array[2] && array[3] == array[1]) || (array[3] == array[6] && array[3] == array[9]) || (array[3] == array[5] && array[3] == array[7])) {
            resultCheck = true;
            result(resultCheck);
        }else if(count == 9) {
            resultCheck = false;
            result(resultCheck);
        }
    }else if(idName == "four") {
        if((array[4] == array[1] && array[4] == array[7]) || (array[4] == array[5] && array[4] == array[6])) {
            resultCheck = true;
            result(resultCheck);
        }else if(count == 9) {
            resultCheck = false;
            result(resultCheck);
        }
    }else if(idName == "five") {
        if((array[5] == array[2] && array[5] == array[8]) || (array[5] == array[4] && array[5] == array[6]) || (array[5] == array[1] && array[5] == array[9]) || (array[5] == array[3] && array[5] == array[7])) {
            resultCheck = true;
            result(resultCheck);
        }else if(count == 9) {
            resultCheck = false;
            result(resultCheck);
        }
    }else if(idName == "six") {
        if((array[6] == array[3] && array[6] == array[9]) || (array[6] == array[5] && array[6] == array[4])) {
            resultCheck = true;
            result(resultCheck);
        }else if(count == 9) {
            resultCheck = false;
            result(resultCheck);
        }
    }else if(idName == "seven") {
        if((array[7] == array[4] && array[7] == array[1]) || (array[7] == array[5] && array[7] == array[3]) || (array[7] == array[8] && array[7] == array[9])) {
            resultCheck = true;
            result(resultCheck);
        }else if(count == 9) {
            resultCheck = false;
            result(resultCheck);
        }
    }else if(idName == "eight") {
        if((array[8] == array[7] && array[8] == array[9]) || (array[8] == array[5] && array[8] == array[2])) {
            resultCheck = true;
            result(resultCheck);
        }else if(count == 9) {
            resultCheck = false;
            result(resultCheck);
        }
    }else if(idName == "nine") {
        if((array[9] == array[8] && array[9] == array[7]) || (array[9] == array[6] && array[9] == array[3]) || (array[9] == array[5] && array[9] == array[1])) {
            resultCheck = true;
            result(resultCheck);
        }else if(count == 9) {
            resultCheck = false;
            result(resultCheck);
        }
    }
}
function result(resultCheck) {
    if(resultCheck) {
        document.getElementById("result").style.visibility = "visible";
        document.getElementById("result").innerHTML = "you won.... Congratulations!!";
    }else {
        document.getElementById("result").style.visibility = "visible";
        document.getElementById("result").innerHTML = "✘0 DRAW!!";
    }
}
function restartfunction() {
    document.getElementById("result").style.visibility = "hidden";
    count = 0;
    array.splice(0, array.length);
    var allButtonIds = ["one","two","three","four","five","six","seven","eight","nine"];
    for(var i = 0; i < allButtonIds.length; i++) {
        document.getElementById(allButtonIds[i]).innerHTML = "";
    }
}
