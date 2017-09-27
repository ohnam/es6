let testVar;

console.log(testVar);

testVar = 12;

console.log("testvar =" + testVar);


// String interpolation
let name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);


//Destructing
let x = [1, 2, 3, 4, 5];
let [y, z, ...etc] = x;

console.log(y); // 1
console.log(z); // 2
console.log(etc);

//default parameters
function defaultParameters(x, y = 12) {
    // y is 12 if not passed (or passed as undefined)
    return x + y;
}let output = (defaultParameters(3) === 15).toString();

console.log(`Output of defaultParameter = ${output}`);


//Rest Parameter
//
// function restParameter(x, ...y) {
//     // y is an Array
//     return x * y.length;
// }
// console.log("Output of restParameter method="+restParameter(3, "hello", true) === 6);


