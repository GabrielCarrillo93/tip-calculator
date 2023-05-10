let bill = ""
let people = ""
let tipAmount = ""
let total = ""

bill = document.getElementById("bill").addEventListener("change", getBill)
people = document.getElementById("people").addEventListener("change", getPeople)
fiver = document.getElementById("fivper").addEventListener("click", fivePercentTip)

function getBill(){
    bill = parseFloat(document.getElementById("bill").value);
    return bill;
}

function getPeople(){
    people = parseFloat(document.getElementById("people").value);
    return people;
}

function fivePercentTip(){
    tip = (bill / people) * 5 / 100
    document.getElementById("tipAmount").value = "$"+tip.toFixed(2)
}


