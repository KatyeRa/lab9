function inPalindrome (str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] == str[str.length - (i + 1)]) {
      return true;
    }
  }
  return false;
}

str1 = prompt("Введите слово для проверки")
alert(inPalindrome(str1))
