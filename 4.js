function Mass(a, matr) {
  for (let i = 0; i < matr.length; i++){
    for(let j = 0; j <matr[i].length; j++){
        matr[i][j] = matr[i][j] * a
    }
  }
  return matr;
}
matr = [[1,6,9], [5,3,7], [2,8,4]];
matr2 = tabl (3,matr);
for (let i = 0; i < matr2; i++) {
  let str = " ";
    for (let j = 0; j = matr2[i].length; j++) {
      str += matr2[i][j] + " ";
    }
    console.log(str);
}
