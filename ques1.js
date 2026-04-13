function divbyk(K,x){
    if(x % K ===0){
        return 1;
    }
    else {
        return 0;
    }
}

function checkfordigi(x){
    var y=x;
    while(y!=0){
        var d=y % 10;
        if(d === 0){
            return 0;
        }
        y/=10;
    }
    return 1;
}

function sumisprime(x){
    var y=x;
    var sum=0;
    while(y!=0){
        var d=y % 10;
        sum+=d;
        y=Math.floor(y / 10);
    }
    if (sum < 2) {
        return 0;
    }
    for (var i = 2; i < sum; i++){
        if (sum % i === 0){
            return 0;
        }
    return 1;
    }
  }


let L = prompt("Please enter L:");
let R = prompt("Please enter R:");
let K = prompt("Please enter K:");
var count=0;
for(var i=L;i<R;i++){
    if(K===0){
        break;
    }
    var sum=sumisprime(i);
    var dk=divbyk(K,i);
    var chec=checkfordigi(i);
    if(sum==1 && dk==1){
        if(chec==1){
            count+=1;
        }
    }
    
}
alert(count);

