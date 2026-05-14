console.log(x);
var x=10;
//const x=11;

const x = 1;
{
  console.log(x); // ReferenceError
  const x = 2;
}