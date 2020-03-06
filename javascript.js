var counter = 0;

var totalClicks = 0;

var totalResets = 0;

var doubler = 0;

var multiplier = 1;

document.getElementById("button").addEventListener("click", function() {
    counter = 0
    totalClicks += 1;
    totalResets += 1;
    document.getElementById("banana").innerHTML = "Current counter is: "+counter;
    document.getElementById("orange").innerHTML = "Total meaningful clicks = "+totalClicks;
    document.getElementById("apple").innerHTML = "Total counter resets = "+totalResets;
    alert ("Counter has been reset to 0");
})


document.getElementById("down").addEventListener("click", function() {
    counter -= multiplier;
    totalClicks += 1;
    document.getElementById("banana").innerHTML = "Current counter is: "+counter;
    document.getElementById("orange").innerHTML = "Total meaningful clicks = "+totalClicks;
})


document.getElementById("up").addEventListener("click", function() {
    counter += multiplier;
    totalClicks += 1;
    document.getElementById("banana").innerHTML="Current counter is: "+counter;
    document.getElementById("orange").innerHTML = "Total meaningful clicks = "+totalClicks;
})

document.getElementById("wipe").addEventListener("click", function() {
    counter = 0;
    totalClicks = 0;
    totalResets = 0;
    document.getElementById("banana").innerHTML= "Current counter is: 0";
    document.getElementById("orange").innerHTML= "Total meaningful clicks = 0";
    document.getElementById("apple").innerHTML= "Total counter resets = 0";
    alert ("Counter, clicks, and resets set to zero");
})

document.getElementById("double").addEventListener("click", function () {
    doubler += 1;
    multiplier = doubler % 2 + 1;
    if (doubler % 2 == 1) {
        document.getElementById("double").innerHTML = "Toggle value doubler (on)";
    }   else {
        document.getElementById("double").innerHTML = "Toggle value doubler (off)";
    }
})