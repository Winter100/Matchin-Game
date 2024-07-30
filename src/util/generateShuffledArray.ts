export function generateShuffledArray(n: number) {
  const array = Array.from({ length: n }, (_, i) => i);

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}
