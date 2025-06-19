
// =======================
// Topic 1: Variable Declarations (var, let, const)
// =======================

// --- VAR ---
function testVar() {
    console.log("var before declaration:", a); // undefined
    var a = 10;
    console.log("var after declaration:", a); // 10
  }
  testVar();
  
  // var is function-scoped and allows redeclaration
  var x = 5;
  var x = 10; // No error
  console.log("Redeclared var x:", x); // 10
  
  // --- LET ---
  function testLet() {
    // console.log("let before declaration:", b); // ReferenceError (TDZ)
    let b = 20;
    console.log("let after declaration:", b); // 20
  }
  testLet();
  
  // let is block-scoped and does not allow redeclaration in same scope
  let y = 30;
  // let y = 40; // SyntaxError: Identifier 'y' has already been declared
  
  {
    let y = 40; // Shadowing allowed
    console.log("Inner block y:", y); // 40
  }
  console.log("Outer block y:", y); // 30
  
  // --- CONST ---
  const PI = 3.14;
  // PI = 3.1415; // TypeError: Assignment to constant variable
  
  const obj = { key: "value" };
  obj.key = "newValue"; // Allowed: mutation
  console.log("Mutated const object:", obj);
  
  // const is block-scoped, cannot be redeclared or reassigned
  // const z; // SyntaxError: Missing initializer in const declaration
  
  // --- TDZ Example ---
  function temporalDeadZone() {
    let condition = true;
    if (condition) {
      // console.log(foo); // ReferenceError (TDZ)
      let foo = "bar";
      console.log("foo after declaration:", foo);
    }
  }
  temporalDeadZone();
  
  // --- Loop Closures: var vs let ---
  console.log("Loop with var:");
  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100); // prints 3, 3, 3
  }
  
  console.log("Loop with let:");
  for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 100); // prints 0, 1, 2
  }
  
  // --- Summary Decision Helper ---
  /*
  Use `let` when reassignment is needed within a block.
  Use `const` when the value should remain fixed (config, constants).
  Avoid `var` in modern JS; only useful for legacy support or function-scoped needs.
  */
  

  