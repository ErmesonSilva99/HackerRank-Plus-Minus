function div (n, d) {
    return (n / d).toFixed(6);
}

// Complete the plusMinus function below.
function plusMinus(arr) {

    let sizeArr = arr.length;
    let countsNegative = 0;
    let countsPositive = 0;
    let countsZero = 0;

    for ( let num of arr ) {
        if ( num > 0 ) {
            countsPositive += 1;
        } else if ( num < 0 ) {
            countsNegative += 1;
        } else if ( num == 0 ) {
            countsZero += 1;
        }
    }

    console.log(div(countsPositive, sizeArr));
    console.log(div(countsNegative, sizeArr));
    console.log(div(countsZero, sizeArr));

}
