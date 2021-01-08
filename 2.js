let arr = [1, 2, 3, 4, 5, 6];

function Name(arr) {
  len = arr.lengh;
  for(let i = 0; i < len; i++){
    console.log(`${arr.pop()} осталось`, arr)
  }
}
Name(arr);
