// Print all the duplicate characters in a string

let str = "geeksforgeekss";

function printDuplicate() {
    let charCount = {};
    let duplicates = [];
    for(let ch of str){
        charCount[ch] = (charCount[ch] || 0) + 1;
    }
    for(let ch in charCount){
        if(charCount[ch]>1){
            duplicates.push(ch)
        }
    }
    return duplicates;
}
printDuplicate();
