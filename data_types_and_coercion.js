
// =======================
// Topic 2: Data Types and Type Coercion
// =======================

// --- PRIMITIVE TYPES ---
let num = 10;
let str = "JavaScript";
let isCool = true;
let notDefined;
let nothing = null;
let bigNum = 12345678901234567890n;
let sym = Symbol("id");

console.log(typeof num);       // number
console.log(typeof str);       // string
console.log(typeof isCool);    // boolean
console.log(typeof notDefined); // undefined
console.log(typeof nothing);   // object (quirky bug)
console.log(typeof bigNum);    // bigint
console.log(typeof sym);       // symbol

// --- NON-PRIMITIVE TYPES ---
let obj = { name: "John" };
let arr = [1, 2, 3];
let fn = function() { return "Hi"; };

console.log(typeof obj); // object
console.log(typeof arr); // object
console.log(Array.isArray(arr)); // true
console.log(typeof fn);  // function

// --- PRIMITIVE vs REFERENCE BEHAVIOR ---
let a = 5;
let b = a;
b = 10;
console.log("Primitive copy:", a); // 5

let x = { val: 1 };
let y = x;
y.val = 99;
console.log("Reference copy:", x.val); // 99

// --- IMPLICIT TYPE COERCION ---
console.log("5" + 1); // "51"
console.log("5" - 1); // 4
console.log(true + 1); // 2
console.log(null + 1); // 1
console.log(undefined + 1); // NaN

console.log(false == 0); // true
console.log(null == undefined); // true
console.log([] + {}); // "[object Object]"
console.log({} + []); // 0

// --- EXPLICIT TYPE CONVERSION ---
console.log(String(123));         // "123"
console.log(Number("42"));        // 42
console.log(Boolean(""));         // false
console.log(Boolean("text"));     // true
console.log(parseInt("123px"));   // 123
console.log(parseFloat("3.14abc"));// 3.14

// --- TYPE CHECKING QUIRKS ---
console.log(typeof null); // "object"
console.log(typeof NaN);  // "number"
console.log(typeof []);   // "object"
console.log(Array.isArray([])); // true
console.log(Object.prototype.toString.call(null)); // [object Null]

// --- JSON PITFALLS ---
console.log(JSON.stringify(undefined)); // undefined
console.log(JSON.stringify({ a: undefined })); // "{}"

// --- SAFE TYPE CHECKING PATTERNS ---
function getType(value) {
  return Object.prototype.toString.call(value);
}
console.log(getType([])); // [object Array]
console.log(getType(null)); // [object Null]
console.log(getType({})); // [object Object]

// --- BEST PRACTICES ---
// Use === instead of == to avoid coercion issues
console.log(0 === "0"); // false
console.log(0 == "0"); // true (not recommended)

// Avoid relying on type coercion in complex expressions



