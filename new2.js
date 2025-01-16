function isPrime(n) {

    let diviser = 0
    

    // use to check our num is 0 or 1
    if (n == 1 || n == 0) return false;


    for (let i = 2; i <= n; i++) {

        if (n % i == 0) {
            diviser++
        }
    }



    return diviser > 1 ? false : true;
}




// function prime(num) {

//     let primearray = [];
//     for (let i = 1; i <= num; i++) {

//         if (isPrime(Number(i))) {
//             // document.write(i + " ");
            
//             // console.log(i);
//             primearray.push(i);
//         }
        
//     }


//     return primearray;

// }
// let N = 100;
// let result = prime(N);
// console.log(result);

function nprime(startat){
    let array=[]
    for(i=startat+1;i<=startat+startat;i++){
        if(isPrime(i)){
            array.push(i);
        }
        
    }
    return array;
}
let res=nprime(30);
console.log(res);