let bill;
let people;
let tip;
let total;
const Percent = {
    five: 5 / 100,
    ten: 10  / 100,
    fifteen: 15  / 100,
    twentyfive: 25  / 100,
    fifty: 50  / 100
}

// functions
function getBill(){
    bill = parseFloat(document.getElementById("bill").value);
    return bill;
}

function getPeople(){
    people = parseFloat(document.getElementById("people").value);
    return people;
}

function perPerson(){
    return bill / people;
}

function fivePercentTip(){
    tip = perPerson() * Percent.five;
    document.getElementById("tipAmount").value = "$"+tip.toFixed(2);
    document.getElementById("total").value = "$"+(tip + perPerson()).toFixed(2);
}

function tenPercentTip(){
    tip = perPerson() * Percent.ten;
    document.getElementById("tipAmount").value = "$"+tip.toFixed(2);
    document.getElementById("total").value = "$"+(tip + perPerson()).toFixed(2);
}

function fifteenPercentTip(){
    tip = perPerson() * Percent.fifteen;
    document.getElementById("tipAmount").value = "$"+tip.toFixed(2);
    document.getElementById("total").value = "$"+(perPerson()+tip).toFixed(2);
}

function twentyFivePercentTip(){
    tip = perPerson() * Percent.twentyfive;
    document.getElementById("tipAmount").value = "$"+tip.toFixed(2);
    document.getElementById("total").value = "$"+(perPerson()+tip).toFixed(2);
}

function fiftyPercentTip(){
    tip = perPerson() * Percent.fifty;
    document.getElementById("tipAmount").value = "$"+tip.toFixed(2);
    document.getElementById("total").value = "$"+(perPerson()+tip).toFixed(2);
}

function warnPeople(){
    if (people == isNaN || people == 0){
        document.getElementById("warning").innerHTML = "Can't be zero!"
    } else if (people >= 1){
        document.getElementById("warning").innerHTML = " "
    }
}

bill = document.getElementById("bill").addEventListener("change", getBill);
people = document.getElementById("people").addEventListener("change", getPeople);
let fiver = document.getElementById("fivper").addEventListener("click", fivePercentTip);
let tenner = document.getElementById("tenper").addEventListener("click", tenPercentTip)
let fifteener = document.getElementById("fifper").addEventListener("click", fifteenPercentTip)
let quarter = document.getElementById("tweper").addEventListener("click", twentyFivePercentTip)
let half = document.getElementById("halper").addEventListener("click", fiftyPercentTip)
document.getElementById("people").addEventListener("blur", warnPeople)