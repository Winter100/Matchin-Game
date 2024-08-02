export const convertLevel = (length: number) => {
  if (length === 5) {
    return "nomal";
  } else if (length === 10) {
    return "hard";
  } else {
    return "hell";
  }
};
