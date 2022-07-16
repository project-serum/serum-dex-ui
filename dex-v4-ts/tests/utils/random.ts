export const random = (min: number, max: number, int?: boolean) => {
  if (min > max) {
    throw new Error("x > y");
  }
  const delta = max - min;
  const res = min + Math.random() * delta;
  if (int) {
    return Math.floor(res);
  }
  return res;
};
