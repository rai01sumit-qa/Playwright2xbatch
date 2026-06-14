let n = 9;
for (let i = 1; i <= n; i++) {

   let row = " ";
   for (let j = 1; j <= i; j++) {

      row += "*";
   }
   console.log(row.trim());
}
console.log("-----")

//Reverse pyramid 

let m = 9;

for (let i = m; i >= 1; i--) {
   let row = "";
   for (let j = 1; j <= i; j++) {
      row += "*";
   }
   console.log(row);
}