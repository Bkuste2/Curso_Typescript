// Utilizar Any apenas em ultimos casos
function showMessage(msg: any) {
  return msg;
}

// console.log(showMessage([1, 2, 3]));
console.log(showMessage({}));
console.log(showMessage('Hey'));
