let inp = [123, 9, 27];

let total = "";

while (inp.length != 1) {
  total = inp.reduce((a, b) => a + b, 0);

  inp = Array.from(String(total), Number);
}
let panjang = inp.length;
let hasil = panjang.toString();

console.log(inp);
