// Global scope
var globalVar = "I'm a GLobal Variable";
let globalLet = "I'm also a global variable, but scoped with let";
const globalConst = "I'm a global constant";


{
    //Block scope
    var blockVar = "I'm a blocked scoped var";
    let blockLet = "I'm a blocked-scoped let";
    const blockConst = "I'm a blocked-scoped const";
}

// Global Scope Console log
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);


// BLock Scope
//console.log(blockVar);
//console.log(blockLet);

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    }
    show();
    
    console.log(functionVar); // Throws ReferenceError
    console.log(functionLet); // Throws ReferenceError
    console.log(functionConst); // Throws ReferenceError