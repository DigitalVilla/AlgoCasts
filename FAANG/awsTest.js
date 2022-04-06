'use strict';

/*
 * Complete the 'countAnalogousArrays' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY consecutiveDifference
 *  2. INTEGER lowerBound
 *  3. INTEGER upperBound
 */

function countAnalogousArrays(diff, lowerBound, upperBound) {
    console.log(diff, lowerBound, upperBound)
    let analogous = []
    let count = lowerBound
    let int = lowerBound

    while (int <= upperBound && int >= lowerBound) {
         let arr = []
        console.log(arr, '->' , analogous)
        for (let i = 0; i <= diff.length; i++ ) {
                console.log(arr, '->' , analogous)
            const el = diff[i] 
            int = int - el
            
            if (int - el <= upperBound && int - el >= lowerBound) {
                arr.push(int)
            }   else {
                arr = null
                break
            }
        }
            
        if (arr) analogous.push(arr)
        count ++
        int = count
        console.log(arr, '->' , analogous)
    }
    
    return analogous.length
}


/*
 * Complete the 'carParkingRoof' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. LONG_INTEGER_ARRAY cars
 *  2. INTEGER k
 */

function carParkingRoof(cars, k) {
    if (k ===  1) return 1
    let a = 0, b = k - 1
    let min = Infinity
    const c = cars.sort((a,b)=>a-b)


console.log(cars, k)
    while(b < cars.length ) {
        // console.log(c[a] , c[b])
        if (c[b] - c[a] +  1 < min) {
            min = c[b]  - c[a] +  1
        }
        a++
        b++
    }
    // console.log(min)
    return min
    
}
