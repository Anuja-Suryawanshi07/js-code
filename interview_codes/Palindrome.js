function isPalindrome(num){
    let num1 = num.split('').reverse().join('');
    return (num == num1) ? "Yes it is" : "No it isn't";
}
console.log(isPalindrome("121"));