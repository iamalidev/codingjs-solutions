function max1020(a, b) {
  function inRange(x) {
    return x >= 10 && x <= 20;
  }

  if (inRange(a) && inRange(b)) {
    return Math.max(a, b);
  } else if (inRange(a)) {
    return a;
  } else if (inRange(b)) {
    return b;
  } else {
    return 0;
  }
}
