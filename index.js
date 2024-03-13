// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}
function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}
function appendCat(name) {
    let newCatsArray = cats.slice(); 
    newCatsArray.push(name);
    return newCatsArray; 
}
function prependCat(name) {
    let newCatsArray = [name, ...cats]; 
    return newCatsArray; 
}
function removeLastCat() {
    let newCatsArray = cats.slice(0, -1); 
    return newCatsArray; 
} 
function removeFirstCat() {
    let newCatsArray = cats.slice(1); 
    return newCatsArray; 
}

