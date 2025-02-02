function frontBack(str) {
  return str.length <= 1 ? str : str.slice(-1) + str.slice(1, -1) + str[0];
}
