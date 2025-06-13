function endUp(str) {
  return str.length < 3
    ? str.toUpperCase()
    : str.slice(0, -3) + str.slice(-3).toUpperCase();
}
