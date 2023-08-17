const value = 15;

function add(a, b) {
  const result = a + b;
  _private(result);
  return result;
}

function sum(a, b) {
  return a * b;
}

// /**
//  *
//  * @param {*} value
//  */
function _private(value) {
  console.log(value);
}

export { add, sum, value };

export default add;
