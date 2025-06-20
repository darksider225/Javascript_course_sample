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

{
    //Block scope reassign
    var blockVar1 = "I'm a blocked scoped var";
    blockVar1 = "blockVar1 Reassigned";
    console.log(blockVar1);
    let blockLet1 = "I'm a blocked-scoped let";
    blockLet1 = "blockLet1 Reassigned";
    console.log(blockLet1);
    const blockConst1 = "I'm a blocked-scoped const";
    blockConst1 = "blockConst1 Reassigned";
    console.log(blockConst1);
}

console.log(blockVar1);
console.log(blockLet1); 
console.log(blockConst1);


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
