var a = parseInt(prompt("enter correct answers"));
var b = parseInt(prompt("enter partially correct answers"));
var c = parseInt(prompt("enter wrong answers"));
var score = 3*a + b - 2*c;
if (score < 0) {
    score = 0;
}
if (a + b + c > 50) {
    score -= 10;
}
var status;
if (score >= 60) {
    status = "PASS";
} 
else {
    status = "FAIL";
}
alert(score);
alert(status);

