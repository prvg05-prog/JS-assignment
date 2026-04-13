var N = parseInt(prompt("enter N")); 
var seed = parseInt(prompt("enter seed")); 
var sum=0; 
var m=0; 
var x=1; 
while (sum < N) { 
    if (x % (seed + 2) != 0) { 
        sum += x; 
    } 
    m = x; 
    x += 1; 
}
alert(m-1); 
alert(sum-1);
