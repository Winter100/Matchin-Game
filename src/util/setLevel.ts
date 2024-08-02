export default function setLevel(level: string) {
  switch (level) {
    case "nomal":
      return 6;
    case "hard":
      return 10;
    case "hell":
      return 10;
    default:
      return 6;
  }
}
