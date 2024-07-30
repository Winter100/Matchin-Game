export default function countMatchingIndices(
  answer: number[],
  userAnswer: number[]
) {
  const minLength = Math.min(answer.length, userAnswer.length);
  return answer.slice(0, minLength).reduce((count, currentValue, index) => {
    if (Number(currentValue) === Number(userAnswer[index])) {
      return count + 1;
    }
    return count;
  }, 0);
}
