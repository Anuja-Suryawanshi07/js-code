function primeCheck(num) {
     if (num < 2)
        return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num% i == 0 )
            return false;
    }
    return true;
}
console.log(primeCheck(7));
console.log(primeCheck(16));
/*
Note : Because if a number has a factor
 larger than its square root,
  it must also have a smaller factor already checked.
Example:
For 36
Factors:
2 × 18
3 × 12
4 × 9
6 × 6
After square root (6), factors repeat in reverse.
So checking beyond square root is unnecessary and slower.
This makes the algorithm faster.
*/