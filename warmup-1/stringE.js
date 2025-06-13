function stringE(str) {
  return (
    str.split("").filter((a) => a == "e").length == 1 ||
    str.split("").filter((a) => a == "e").length == 3
  );
}
