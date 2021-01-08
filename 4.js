function Mass(a, matr) {
  for (let i = 0; i < matr.length; i++){
    for(let j = 0; j <matr[i].length; j++){
        matr[i][j] = matr[i][j] * a
    }
  }

for (let i = 0; i < matr.length; i++) {
  let str = " "
  for (let j = 0; j = matr[i].length; j++) {
      str += matr[i][j] + " "
    }
    console.log(str);
  }
}

var matr = [[1,6,9], [5,3,7], [2,8,4]];
var a = 5;
matrN = (a, matr);
