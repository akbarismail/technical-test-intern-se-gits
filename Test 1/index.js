const tringularNumbers = (n) => {
  let result = '';
  for (let i = 0; i <= n; i++) {
    result = result + String(i * (i + 1) * 0.5 + 1);
    if (i < n) result = result + '-';
  }
  return result;
};

console.log(tringularNumbers(7));
