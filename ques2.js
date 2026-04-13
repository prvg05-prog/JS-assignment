
function inc(x){
    if(x>=100 && x<=999){
        return 1;
    }
    else{
        return 0;
    }
}

function checkmid(x,seed){
    var mid=Math.floor(x / 10) % 10;
    if(mid===seed){
        return 1;
    }
    return 0;
}


let num= prompt("enter number");
let seed= prompt("enter seed");
for(var i=0;i<3;i++){
    if(num % 2===0){
        num= num/2 +seed;
    }
    else{
        num=num*3-seed;
    }
}

var incs=inc(num);
var smid=checkmid(num,seed);
if(incs===smid && smid ===1){
    alert("yes");
}


