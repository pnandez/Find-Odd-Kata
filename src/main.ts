const findOdd = (xs: number[]): number | null | number[] => {
  if (xs.length === 0) {
    throw new Error("Empty array");
  }

  const repeatingNumbers: { [num: number]: number } = {};
  xs.forEach((n) => {
    if (repeatingNumbers[n] === undefined) {
      repeatingNumbers[n] = 0;
    }
    repeatingNumbers[n] += 1;
  });
  const result: number[] = [];
  for (const [key, value] of Object.entries(repeatingNumbers)) {
    if (value % 2 !== 0) {
      result.push(Number(key));
    }
  }
  if (result.length == 1) return result[0];
  if (result.length == 0) return null;
  return result;
};

export default findOdd;
