let mx1 = [[3, 4], [1, 2]];
let mx2 = [[7, 5], [6, 4]];

function matDot(mA, mB) {
  let hasil = new Array(mA.length);
  if (mA[0].length === mB.length) {
    for (let i = 0; i < mA.length; i++) {
      hasil[i] = new Array(mB[0].length);
      for (let j = 0; j < mB[0].length; j++) {
        hasil[i][j] = 0;
        for (let k = 0; k < mA[0].length; k++) {
          hasil[i][j] += mA[i][k] * mB[k][j];
        }
      }
    }
  } else {
    return "Kolom & baris harus sama";
  }
  return hasil;
}

console.log(matDot(mx1, mx2));
