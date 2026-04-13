var base = parseInt(prompt("enter base"));
var dist = parseInt(prompt("enter distance"));
var minslate = parseInt(prompt("enter minutes late"));
var seed = parseInt(prompt("enter seed"));
var fare= base + 7*dist;
if (minslate > 15) {
    fare += 20;
}

if (dist> 10) {
    fare += Math.floor(0.1 * fare);
}

if (seed % 2 === 1) {
    fare -= seed;
}
else {
    fare += seed;
}
fare = Math.ceil(fare / 5) * 5;

alert(fare);
