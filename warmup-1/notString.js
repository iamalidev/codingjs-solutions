function notString(str) {
  return str.startsWith("not") ? str : `not ${str}`;
}
