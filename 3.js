str = prompt("Введите слово для проверки")
inPalindrome(str)

function inPalindrome (str) {
  str = srt.lengrh();
  str2 == str.split('').reverse().join('');

  if (str == str2){
    alert(str + "- слово-палиндром")
  }
  else {
    alert(str + "- слово - не палиндром")
  }
}
