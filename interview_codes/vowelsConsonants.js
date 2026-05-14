// Check Vowels and Consonants
function count(string){
    let consonants = string.match(/[bcdfghjklmnpqrstvwxyz]/ig);
    let vowels = string.match(/[aeiou]/ig);
    return `Vowels:${vowels.length},Consonents:${consonants.length}`;
}
console.log(count("Javascript"));