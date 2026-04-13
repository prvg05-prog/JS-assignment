function palin(x){
    var y=x;
    var z=0;
    while(y!=0){
        var d=y %10;
        z=z*10 +d;
        y=Math.floor(y / 10);
    }
    if(z ==x ){
        return 1;
    }
    else{
        return 0;
    }
}

function divbyk(x,k){
    if(x % k==0){
        return 1;
    }
    else{
        return 0;
    }
}

let N=prompt("enter N");
let K=prompt("enter K");
var x=1
while(x!=100000){
    var x1=palin(N+x);
    var x2=divbyk(N+x,K);
    x+=1;
    if(x1==x2 && x1==1){
        alert(x);
        break;
    }
}
