function delDel(str) {
  return str.startsWith("del", 1) ? str.slice(0, 1) + str.slice(4) : str;
}
