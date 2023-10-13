

const  array = [11, 3, 6, 10, 43, 29, 50];
for (let index = 0; index < array.length; index++) {
    function isPrimeNumber(num){
        for (let index = 2; index < num; index++) {
            if (num%index==0) {
                return false;
            }
        }
        return true;
    }
    const result = isPrimeNumber(array[index]);
console.log(`${array[index]} is Prime Number : ${result}`);

    
}


//console.log(array[index]);