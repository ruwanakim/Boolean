
// let i = 100
//     while( i >= 1){
//         console.log(i);
//         i--;
//     }

let n = 0, sum = 0;
    while(true) {
        n =+ prompt('enter number:');
        if(n == null || n=='') break;
        sum += n;
    }
alert('sum= ' + sum);