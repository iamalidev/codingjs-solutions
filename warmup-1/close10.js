function close10(a, b) {
  let diffA = Math.abs(a - 10);
  let diffB = Math.abs(b - 10);

  if (diffA < diffB) return a;
  if (diffB < diffA) return b;
  return 0;
}
