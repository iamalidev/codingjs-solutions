function in3050(a, b) {
  let in30to40 = a >= 30 && a <= 40 && b >= 30 && b <= 40;
  let in40to50 = a >= 40 && a <= 50 && b >= 40 && b <= 50;
  return in30to40 || in40to50;
}
