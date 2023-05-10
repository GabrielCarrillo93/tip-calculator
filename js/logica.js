let bill = "";
let people = "";
let tip = bill / people;
let total = "";

let fiver = document.getElementById("fivper").addEventListener("click", fivePercentTip);
let tenner = document.getElementById("tenper").addEventListener("click", tenPercentTip)
let fifteener = document.getElementById("fifper").addEventListener("click", fifteenPercentTip)
let quarter = document.getElementById("tweper").addEventListener("click", twentyFivePercentTip)
let half = document.getElementById("halper").addEventListener("click", fiftyPercentTip)


bill = document.getElementById("bill").addEventListener("change", getBill);
people = document.getElementById("people").addEventListener("change", getPeople);

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
    tip = perPerson() * 5 / 100;
    document.getElementById("tipAmount").value = "$"+tip.toFixed(2);
    document.getElementById("total").value = "$"+(tip + perPerson()).toFixed(2);
}

function tenPercentTip(){
    tip = perPerson() * 10 / 100
    document.getElementById("tipAmount").value = "$"+tip.toFixed(2);
    document.getElementById("total").value = "$"+(tip + perPerson()).toFixed(2);
}

function fifteenPercentTip(){
    tip = perPerson() * 15 / 100;
    document.getElementById("tipAmount").value = "$"+tip.toFixed(2);
    document.getElementById("total").value = "$"+(perPerson()+tip).toFixed(2);
}

function twentyFivePercentTip(){
    tip = perPerson() * 25 / 100;
    document.getElementById("tipAmount").value = "$"+tip.toFixed(2);
    document.getElementById("total").value = "$"+(perPerson()+tip).toFixed(2);
}

function fiftyPercentTip(){
    tip = perPerson() * 50 / 100;
    document.getElementById("tipAmount").value = "$"+tip.toFixed(2);
    document.getElementById("total").value = "$"+(perPerson()+tip).toFixed(2);
}